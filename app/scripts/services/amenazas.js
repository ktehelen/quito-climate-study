'use strict';

angular.module('quitoClimateStudyApp')
  .service('Amenazas', function Amenazas() {
    //(threats)
    //TODO: WHAT IS THE EXPECTED BEHAVIOR WHEN A USER CHOOSES ONE OF THE
    //AMENAZAS FROM THE MENU ON THE LEFT?
    var amenazas = [
    	{
    		name: 'Climáticas'
    	},
    	{
    		name: 'Amenazas antropicas'
    	},
    	{
    		name: 'Amenazas Morfoclimaticas'
    	}
    ];

    return {
        getAmanazaNames: function() {
            return _.pluck(amenazas, 'name');
        }
    };
  });
