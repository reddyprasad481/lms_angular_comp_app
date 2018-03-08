 'use strict'
angular.module('approve')

    .service('leavesService', LeavesService)
	.component('approveComponent',{
		template:'<h3>Approve Leaves</h3> <ng-outlet></ng-outlet>',
		 $routeConfig: [
            {path: '/',    name: 'LeavesList',   component: 'leavesList', useAsDefault: true},
            {path: '/:id', name: 'LeaveDetail', component: 'leaveDetail'}
        ]
	})
    
.component('leavesList', {
    template:
      '<div ng-repeat="leave in $ctrl.leaves" ' +
      '     ng-class="{ selected: $ctrl.isSelected(leave) }">\n' +
        '<a ng-link="[\'LeaveDetail\', {id: leave.id}]">{{leave.name }}</a>\n' +
      '</div>',
    controller: LeaveListComponent
  })

 .component('leaveDetail', {
    template:
      '<div ng-if="$ctrl.leave">\n' +
      '  <h3>"{{$ctrl.leave.name}}"</h3>\n' +
      '  <div>\n' +
      '    <label>Id: </label>{{$ctrl.leave.id}}</div>\n' +
      '  <div>\n' +
      '    <label>Id: </label>{{$ctrl.leave.type}}</div>\n' +
      '  <div>\n' +
      '    <label>Name: </label>\n' +
      '    <input ng-model="$ctrl.leave.name" placeholder="name"/>\n' +
      '  </div>\n' +
      '  <button ng-click="$ctrl.gotoLeaves()">Back</button>\n' +
      '</div>\n',
    bindings: { $router: '<' },
    controller: LeaveDetailComponent
  });

function LeavesService($q) {
  var leavesPromise = $q.resolve([
    { id: 11, name: 'Mr. Nice' ,type:'PL'},
    { id: 12, name: 'Narco' ,type:'UL'},
    { id: 13, name: 'Bombasto' ,type:'PL'},
    { id: 14, name: 'Celeritas' ,type:'UL'},
    { id: 15, name: 'Magneta' ,type:'PL'},
    { id: 16, name: 'RubberMan' ,type:'PL'}
  ]);

  this.getLeaves = function() {
    return leavesPromise;
  };

  this.getLeave = function(id) {
    return leavesPromise.then(function(leaves) {
      for (var i = 0; i < leaves.length; i++) {
        if (leaves[i].id === id) return leaves[i];
      }
    });
  };
}

function LeaveListComponent(leavesService) {
  var selectedId = null;
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    // Load up the leaves for this view
    leavesService.getLeaves().then(function(leaves) {
      $ctrl.leaves = leaves;
      selectedId = next.params.id;
    });
  };

  this.isSelected = function(leave) {
    return (leave.id === selectedId);
  };
}

function LeaveDetailComponent(leavesService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    // Get the leave identified by the route parameter
    var id = next.params.id;
    leavesService.getLeave(id).then(function(leave) {
      $ctrl.leave = leave;
    });
  };

  this.gotoLeaves = function() {
    var leaveId = this.leave && this.leave.id;
    this.$router.navigate(['LeavesList', {id: leaveId}]);
  };
}