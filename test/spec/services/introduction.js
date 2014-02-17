'use strict';

describe('Service: Introduction', function () {

  // load the service's module
  beforeEach(module('quitoClimateStudyApp'));

  // instantiate service
  var Introduction;
  beforeEach(inject(function (_Introduction_) {
    Introduction = _Introduction_;
  }));

  it('should do something', function () {
    expect(!!Introduction).toBe(true);
  });

});
