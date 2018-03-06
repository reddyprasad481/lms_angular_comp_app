'use strict';

/**
 * @ngdoc overview
 * @name lmsApp
 * @description
 * # lmsApp
 *
 * Main module of the application.
 */
angular
  .module('lmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngComponentRouter',
    'leaveRequests',
    'approve',
    'header',
    'footer',
    'commonServices'
  ])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'appComponent');
