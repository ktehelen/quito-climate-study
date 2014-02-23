'use strict';

angular.module('quitoClimateStudyApp')
  .controller('ReportCtrl', ['$scope', 'Vulnerabilidad', 'Introduction', 'Amenazas', 'Documents', 
  	function ($scope, Vulnerabilidad, Introduction, Amenazas, Documents) {
  		$scope.currentView = 'main'; //can be either 'main' or 'scenarios' => changes layout of main site
  		$scope.focus = 'intro';
  		$scope.vulnerabilities = Vulnerabilidad.getVulnerabilityNames();
  		$scope.amenazaNames = Amenazas.getAmanazaNames();
  		$scope.documents = Documents.getDocumentList();  		  	
  		$scope.introduction = Introduction;
  		$scope.currentVulnerability = {};

  		$scope.hasCurrentVulnerability = function(){
  			return !(angular.isUndefined($scope.currentVulnerability) || $scope.currentVulnerability === null);
  		};  	

  		$scope.changeFocus = function(itemType, item) {  			  		
  			if (itemType === 'vulnerability') {
				$scope.currentVulnerability = Vulnerabilidad.getVulnerabilityByName(item);
	  			console.log($scope.currentVulnerability);  			
  			}  			
  		};

  		$scope.changeView = function(item) {
  			console.log(item);
  			$scope.currentView = item;
  		};
	}]);
