'use strict';

angular.module('quitoClimateStudyApp')
  .service('Documents', function Documents() {
    // (list of documents)
    var documentRoot = 'http://quitoestudiodeclima.blob.core.windows.net/documents/';    
    var documents = [
        {
            name: 'Example document',
            file: 'example.txt'
        },
    	{
    		name: 'Analisis de Percepción',
    		file: 'Filename of PDF to serve'
    	},
    	{
    		name: 'Analisis integrado de amenazas cambio climático',
    		file: 'Filename of PDF to serve'
    	},
    	{
    		name: 'Estructura de metodologia',
    		file: 'Filename of PDF to serve'
    	},
    	{
    		name: 'Vulnerabilidad actural y futura e indices',
    		file: 'Filename of PDF to serve'
    	},
    	{
    		name: 'Lineas de adaptación',
    		file: 'Filename of PDF to serve'
    	},
    	{
    		name: 'Lecciones aprendidas',
    		file: 'Filename of PDF to serve'
    	},
    ];

    return {
        getDocumentList: function(){
            return _.map(documents, function(doc) {
                return {
                    name: doc.name,
                    file: documentRoot + doc.file
                };
            });
        }
    };
  });
