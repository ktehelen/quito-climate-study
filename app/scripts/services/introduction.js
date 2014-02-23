'use strict';

angular.module('quitoClimateStudyApp')
  .service('Introduction', function Introduction() {
    var terms = [
    	{
    		name: 'vulnerabilidad',
    		definition: 'Please define this term'
    	},
		{
    		name: 'term2',
    		definition: 'Please define this term'
    	},
    	{
    		name: 'term3',
    		definition: 'Please define this term'
    	},
    	{
    		name: 'term4',
    		definition: 'Please define this term'
    	}
    ];

    var methodology = 'Please add a description of the methodology of this study';
    var methodologyDiagram = 'Filename of the workflow diagram of this study';
    var methodologyMoreInfo = 'Filename of a PDF document contiaining more information about methodology';

    return {
        terms: terms,
        methodology: methodology,
        methodologyDiagram: methodologyDiagram,
        methodologyMoreInfo: methodologyMoreInfo
    };
  });
