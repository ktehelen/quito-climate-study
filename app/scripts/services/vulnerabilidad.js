'use strict';

angular.module('quitoClimateStudyApp')
  .service('Vulnerabilidad', function Vulnerabilidad() {
    // vulnerabilities
    var vulnerabilities = [
    	{
    		name: 'Agua',
    		description: 'El sistema de abastecimiento del DMQ tiene sus orígenes en el siglo XVI, cuando la napa y los manantiales de la ciudad comenzaron a ser utilizados . La napa freática de Quito fue la principal fuente de abastecimiento a partir de la década de los 40’s,, y desde los años 60’s se encuentra en operación el sistema Occidente que usa las aguas superficiales del río Pichincha y otras cuencas al Sur. Posteriormente, en los años 70’s se comenzó a observar una baja considerable de los niveles piezométricos , razón por la que se tuvo la necesidad de una fuente de abastecimiento alterno proveniente de las cuencas del Sur. Con ello se implementó el suministro de agua del Río Pita, y con el mismo objetivo se encuentra en operación desde los años 90’s el sistema Tesalia en la cuenca de San Pedro.

El sistema Noroccidente en funcionamiento desde el año 1991 captura las aguas de diversas quebradas del Pichincha hasta la cuenca alta del Río Mindo en el Occidente, mientras que el abastecimiento desde las zonas de páramos en las cuencas del lado amazónico  se inició en el año 1990, al igual que el primer sistema Papallacta. Además, en el año 2000 comenzó a operar el sistema Mica que capta agua proveniente de las cuencas altas del Antizana, con alrededor de 70% de páramos y 5% de glaciar . 

El estudio ha considerado dos tipos de unidades de análisis: (i) las cuencas hidrográficas aportantes de agua “cruda” entre las que se encuentran las fuentes de agua del DMQ mencionadas anteriormente, y  (ii) las zonas de abastecimiento de agua potable (o también conocidas como zonas de servicio) a nivel de la distribución de la población otorgadas por EPMAAP-Q. 

Si bien el DMQ cuenta con diferentes alternativas y reservas de agua (subterránea, por ejemplo), el volumen de agua suministrado actualmente por las cuencas aportantes es de aproximadamente un 90% (otras fuentes de suministro son los sistemas más pequeños localizados en el occidente del volcán Pichincha y ojos de agua locales en sectores rurales); por lo que de su funcionamiento y provisión depende el abastecimiento en las áreas de servicio urbano.
',
    		furtherInfoReport: 'Please make this the file name of a PDF document for more information as on Pagina 3 of spreadsheet',
    		analysisNarrative: 'Partiendo de esta línea base del estudio, se identificaron los siguientes indicadores espaciales para definir la exposición y la sensibilidad del sector agua. Para la exposición, se proponen dos categorías generales de indicadores: Las condiciones climáticas en las cuencas aportantes, y lLa cobertura de páramo en las cuencas aportantes.

Estos dos indicadores (ya sea de forma individual o combinada) permiten comprender las variaciones en la cantidad de agua disponible para satisfacer las necesidades de los usuarios dentro de las zonas de servicio de EMAAP-Q. Esta información es clave para determinar el  la suficiencia del suministro del agua potable.
',
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
            dataFiles: [
                {
                    name: 'Name of dataset to show on site',
                    file: 'Filename of dataset to download'
                }
            ]
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

    return {
        getVulnerabilityNames: function() {
            return _.pluck(vulnerabilities, 'name');
        },

        getVulnerabilityByName: function(name){
            return _.findWhere(vulnerabilities, { name: name });
        }
    };
  });
