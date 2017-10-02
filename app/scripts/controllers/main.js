'use strict';


/**
 * @ngdoc function
 * @name poolprosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poolprosApp
 */


app.controller('MainCtrl', function ($scope, $filter, $http, $routeParams, $location) {

	$scope.dealers = [];
	$scope.longDealerName = '';
	$scope.filterResultsCount = 0;
	$scope.proType = [{name:'Shrek', genre:'Comedy'},
                     {name:'Die Hard', genre:'Action'},
                     {name:'The Godfather', genre:'Drama'}];

	 $scope.arrangeHours= function(day,index){

	 	//console.log(index);
	 	//console.log(day);
	 	return day;	
	 };

	$scope.isCertified = function(certifications, cert){
		var found = false;
		angular.forEach(certifications, function(value, key) {
		  //this.push(key + ': ' + value);\
		  //console.log(value.data.name.length);
		  // if(value.data.name.length > 20){
		  // 	$scope.longDealerName = 'longDealerName';
		  // }

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
	}
	
	$scope.seeIndex = function(obj){
		//console.log(obj,'index');
	};
	$scope.checkName = function(obj){
		angular.forEach(obj, function(value, key) {
		  //this.push(key + ': ' + value);\
		  //console.log(value.data.name.length);
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
	        	$scope.filterResultsCount = dealersList.length;
	        	$scope.dealers = dealersList;
	        	
	        	//return $scope.dealers;
	        	//console.log(response.data.id==1);
	        	//var conversation = response.data.ticket.find(ticket => ticket.id == $routeParams.ticketID);
		   		// // console.log(conversation);
		   		// $scope.ticketData = {
		   		// 	name: $scope.userLogged.username,
		   		// 	mobile: $scope.userLogged.mobile,
		   		// 	email: $scope.userLogged.email,
		   		// 	issue:conversation.issue,
		   		// 	status:conversation.status,
		   		// 	assignedTo:conversation.assign_to,
		   		// 	department:conversation.department,
		   		// 	healthTopic:conversation.help_topic,
		   		// };
		   		

		   		// $scope.tickets.push(conversation);
		   		// $scope.loadedMsg = conversation.message;

		   },function (error){
		   		console.log(error);
		   });
	};

	$scope.getDealers();

	
	$scope.filter = {}
	$scope.filterDealers = function(model, name){
	  // Display the wine if
	  $scope.filter

	  if(	model.service 
	  		|| 	model.installation 
			|| 	model.residential 
			||	model.commercial 
	  	){

	  	var filteredDealers = $scope.dealers.filter(function(dealer){
		  return dealer.data.certifications.indexOf(name) > -1;
		});

	  	$scope.filterResultsCount = filteredDealers.length;
	  	$scope.dealers = filteredDealers;
	  }else{
	  	$scope.getDealers();
	  }
	  
	  console.log(model);
	  console.log($scope.dealers );

	};


	



	



});

// app.factory('DealerService', function($http){

	
// 		getDealers: function(){
			
// 		}


// });