'use strict';


/**
 * @ngdoc function
 * @name poolprosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poolprosApp
 */
app.controller('MainCtrl', function ($scope, $filter, $http ) {

	$scope.dealers = [];
	$scope.longDealerName = '';
	$scope.filterResultsCount = 0;
	$scope.onLoadDealersCount = 0;
	$scope.hasFilter = false;
	$scope.sendTo = {};
	$scope.isTapNavOpen = false;
	$scope.isMobileFilterOpen = false;
	$scope.nameField = "";
	$scope.phoneField = "";
	$scope.emailField = "";
	$scope.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
	$scope.inputs = [
		{
			"name":"name",
			"value":$scope.nameField,
			"type":"text",
			"isRequired":true,
			"isValid":false
		},
		{
			"name":"tel",
			"value":$scope.phoneField,
			"type":"number",
			"isRequired":true,
			"isValid":false
		},
		{
			"name":"email",
			"value":$scope.emailField,
			"type":"email",
			"isRequired":true,
			"isValid":false
		}
	];

	$scope.openTapNav = function(){
		$scope.isTapNavOpen = true;
	};
	$scope.closeTapNav = function(){
		$scope.isTapNavOpen = false;
	};
	$scope.toggleMobileFilter = function(){
		if($scope.isMobileFilterOpen){
			$scope.isMobileFilterOpen = false;
		} else {
			$scope.isMobileFilterOpen = true;
		}
	};

	$scope.arrangeHours= function(day){
	 	return day;	
	 };

	$scope.isCertified = function(certifications, cert){
		var found = false;
		angular.forEach(certifications, function(value) {

		  if(value === cert){
		  	//console.log(value + ' Found');
		  	found = true;

		  	
		  }else{
		  	//found = false;
		  	//console.log(cert+'='+value);
		  	// console.log('Not Found');
		  }
		 
		});
		return found;
	};

	$scope.isDealerNameShort = function(name){
		if(name.length < 26 ){
			return 'l-height-85';
		}
		return '';
	};
	
	$scope.checkName = function(obj){
		angular.forEach(obj, function(value) {
		  if(value.data.name.length > 20){
		  	$scope.longDealerName = 'longDealerName';
		  }
		  //console.log(key);
		});
	};
	
	// Filter
	$scope.getDealers = function(){

    	$http.get('storage/dealers.json')
	        .then(function (response){
	        	//console.log(response.data.dealers);
	        	var dealersList = response.data.dealers;

	        	$scope.checkName(dealersList);
	        	$scope.onLoadDealersCount = dealersList.length;
	        	$scope.filterResultsCount = dealersList.length;
	        	$scope.dealers = dealersList;
	        	
		   },function (error){
		   		console.log(error);
		   });
	};

	$scope.getDealers();

	
	$scope.model = {
		"service":false,
		"installation":false,
		"residential":false,
		"commercial":false,
	};
	
	
	$scope.filterDealers = function(model, name){

	  if(	model.service || 	model.installation || 	model.residential ||	model.commercial ){
	  	$scope.hasFilter = true;
	  	var filteredDealers = $scope.dealers.filter(function(dealer){
		  return dealer.data.certifications.indexOf(name) > -1;
		});

	  	$scope.filterResultsCount = filteredDealers.length;
	  	$scope.dealers = filteredDealers;
	  }else{
	  	$scope.filterResultsCount = $scope.onLoadDealersCount;
	  	$scope.getDealers();
	  }
	  
	};

	// Email
	$scope.sentTo = function(data){
		$scope.sendTo = data;
	}

	// Form Validation
	$scope.isFieldValid = function(fieldname,val,required,type){

		var isValid = false;

		var selectedField = $scope.inputs.filter(function(field){
		  return (field.name.indexOf(fieldname) > -1 );
		});
		
		selectedField.value = val;
		selectedField.isRequired = required;
		selectedField.type = type;
		selectedField.name = fieldname;

		var name = selectedField.name;
		var value = selectedField.value;
		var type = selectedField.type;
		var required = selectedField.isRequired;

		if(required && value !=='' && type === 'text'){
			isValid = true;
		}  else if(required && value !=='' && type === 'number'){
			isValid = true;
		}  else if(required && value !=='' && type === 'email' && $scope.emailRegex.test(value) ){
			isValid = true;
		} 

		return isValid;
	}

});