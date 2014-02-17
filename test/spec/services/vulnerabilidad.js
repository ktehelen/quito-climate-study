'use strict';

describe('Service: Vulnerabilidad', function () {

  // load the service's module
  beforeEach(module('quitoClimateStudyApp'));

  // instantiate service
  var Vulnerabilidad;
  beforeEach(inject(function (_Vulnerabilidad_) {
    Vulnerabilidad = _Vulnerabilidad_;
  }));

  it('should do something', function () {
    expect(!!Vulnerabilidad).toBe(true);
  });

});
