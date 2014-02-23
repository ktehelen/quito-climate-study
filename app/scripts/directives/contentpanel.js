'use strict';

angular.module('quitoClimateStudyApp')
  .directive('contentPanel', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the contentPanel directive');
      }
    };
  });
