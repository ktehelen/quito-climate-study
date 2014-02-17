'use strict';

angular.module('quitoClimateStudyApp')
  .service('Vulnerabilidad', function Vulnerabilidad() {
    // vulnerabilities
    var vulnerabilities = [
    	{
    		name: 'Agua',
    		description: 'Please add text describing the sector for the Description del sector',
    		furtherInfoReport: 'Please make this the file name of a PDF document for more information as on Pagina 3 of spreadsheet',
    		analysisNarrative: 'Please add text for the Narrativa sobre el análisis para el sector Exposure, Sensitivity, Adaptative Capacity',
    		exposures: [
    			{
    				name: 'Climate',
    				maps: [
    					{
	    					name: 'Current',
	    					map: 'This is the filename of this map'
    					},
    					{
    						name: 'Future',
    						map: 'This is the filename of this map'
    					}
    				]
    			},
    			{
    				name: 'Water challenges',
    				maps: [
    					{
    						name: 'Challenge 1',
    						map: 'This is the filename of this map'
    					},
    					{
    						name: 'Challenge 2',
    						map: 'This is the filename of this map'
    					}
    				]
    			}
    		],
    		sensitivityAnalysis: [
    			{
    				name: 'Indicator 1 - Pobreza',
    				map: 'This is the filename of this map'
    			},
    			{
    				name: 'Indicator 2 - ',
    				map: 'This is the filename of this map'
    			}
    		],
    		adaptiveCapacity: [
    			{
    				name: 'Indicator 1',
    				map: 'This is the filename of this map'
    			}
    		],
    		excelFile: 'This is the filename of the Excel file to serve for this vulnerability'
    	},
        {
            name: 'Salud',
            description: 'Please add text describing the sector for the Description del sector',
            furtherInfoReport: 'Please make this the file name of a PDF document for more information as on Pagina 3 of spreadsheet',
            analysisNarrative: 'Please add text for the Narrativa sobre el análisis para el sector Exposure, Sensitivity, Adaptative Capacity',
            exposures: [
                {
                    name: 'Climate',
                    maps: [
                        {
                            name: 'Current',
                            map: 'This is the filename of this map'
                        },
                        {
                            name: 'Future',
                            map: 'This is the filename of this map'
                        }
                    ]
                },
                {
                    name: 'Water challenges',
                    maps: [
                        {
                            name: 'Challenge 1',
                            map: 'This is the filename of this map'
                        },
                        {
                            name: 'Challenge 2',
                            map: 'This is the filename of this map'
                        }
                    ]
                }
            ],
            sensitivityAnalysis: [
                {
                    name: 'Indicator 1 - Pobreza',
                    map: 'This is the filename of this map'
                },
                {
                    name: 'Indicator 2 - ',
                    map: 'This is the filename of this map'
                }
            ],
            adaptiveCapacity: [
                {
                    name: 'Indicator 1',
                    map: 'This is the filename of this map'
                }
            ],
            excelFile: 'This is the filename of the Excel file to serve for this vulnerability'
        },
        {
            name: 'Agricultura',
            description: 'Please add text describing the sector for the Description del sector',
            furtherInfoReport: 'Please make this the file name of a PDF document for more information as on Pagina 3 of spreadsheet',
            analysisNarrative: 'Please add text for the Narrativa sobre el análisis para el sector Exposure, Sensitivity, Adaptative Capacity',
            exposures: [
                {
                    name: 'Climate',
                    maps: [
                        {
                            name: 'Current',
                            map: 'This is the filename of this map'
                        },
                        {
                            name: 'Future',
                            map: 'This is the filename of this map'
                        }
                    ]
                },
                {
                    name: 'Water challenges',
                    maps: [
                        {
                            name: 'Challenge 1',
                            map: 'This is the filename of this map'
                        },
                        {
                            name: 'Challenge 2',
                            map: 'This is the filename of this map'
                        }
                    ]
                }
            ],
            sensitivityAnalysis: [
                {
                    name: 'Indicator 1 - Pobreza',
                    map: 'This is the filename of this map'
                },
                {
                    name: 'Indicator 2 - ',
                    map: 'This is the filename of this map'
                }
            ],
            adaptiveCapacity: [
                {
                    name: 'Indicator 1',
                    map: 'This is the filename of this map'
                }
            ],
            excelFile: 'This is the filename of the Excel file to serve for this vulnerability'
        },
        {
            name: 'Ecosistemas',
            description: 'Please add text describing the sector for the Description del sector',
            furtherInfoReport: 'Please make this the file name of a PDF document for more information as on Pagina 3 of spreadsheet',
            analysisNarrative: 'Please add text for the Narrativa sobre el análisis para el sector Exposure, Sensitivity, Adaptative Capacity',
            exposures: [
                {
                    name: 'Climate',
                    maps: [
                        {
                            name: 'Current',
                            map: 'This is the filename of this map'
                        },
                        {
                            name: 'Future',
                            map: 'This is the filename of this map'
                        }
                    ]
                },
                {
                    name: 'Water challenges',
                    maps: [
                        {
                            name: 'Challenge 1',
                            map: 'This is the filename of this map'
                        },
                        {
                            name: 'Challenge 2',
                            map: 'This is the filename of this map'
                        }
                    ]
                }
            ],
            sensitivityAnalysis: [
                {
                    name: 'Indicator 1 - Pobreza',
                    map: 'This is the filename of this map'
                },
                {
                    name: 'Indicator 2 - ',
                    map: 'This is the filename of this map'
                }
            ],
            adaptiveCapacity: [
                {
                    name: 'Indicator 1',
                    map: 'This is the filename of this map'
                }
            ],
            excelFile: 'This is the filename of the Excel file to serve for this vulnerability'
        }
    ];
  });
