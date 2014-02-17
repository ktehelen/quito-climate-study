'use strict';

describe('Service: Amenazas', function () {

  // load the service's module
  beforeEach(module('quitoClimateStudyApp'));

  // instantiate service
  var Amenazas;
  beforeEach(inject(function (_Amenazas_) {
    Amenazas = _Amenazas_;
  }));

  it('should do something', function () {
    expect(!!Amenazas).toBe(true);
  });

});
