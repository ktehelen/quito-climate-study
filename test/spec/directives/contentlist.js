'use strict';

describe('Directive: contentList', function () {

  // load the directive's module
  beforeEach(module('quitoClimateStudyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<content-list></content-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the contentList directive');
  }));
});
