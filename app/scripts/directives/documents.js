'use strict';

angular.module('quitoClimateStudyApp')
  .directive('documents', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the documents directive');
      }
    };
  });
