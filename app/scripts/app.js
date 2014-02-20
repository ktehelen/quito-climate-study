'use strict';

angular.module('quitoClimateStudyApp', [
  'ngResource',
  'ngRoute'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        /*templateUrl: 'views/main.html',
        controller: 'MainCtrl'*/
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
