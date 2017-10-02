'use strict';

/**
 * @ngdoc function
 * @name poolprosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poolprosApp
 */
angular.module('poolprosApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });




'use strict';


/**
 * @ngdoc function
 * @name poolprosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poolprosApp
 */

app.controller('MainCtrl',  ['$scope','$http', '$routeParams','$location', 
	function ($scope, $http, $routeParams, $location) {

	$http.get('storage/dealers.json')
        .then(function (response){
        	console.log(response);
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


}]);


 app.directive('viewData', ['$location', function($location){

   return {
    restrict: 'A',
    scope: true,
    link: function($scope, elem, attrs){
      elem.bind('click', function () {
              var a = attrs.link;
               $location.path( a );
               $scope.$apply();
              // ticketMessage.tData(a);
               console.log(a);
            });
    }
   };
  }]);


  app.directive('colorData', function(){
      return{
        restrict: 'A',
        scope: true,
        link:function ($scope, element, attrs){
              var a = attrs.cls;
              if(a ==='REGISTRATION'){
                    element.addClass('registration');
              }else if(a ==='PAY VIA OR'){
                    element.addClass('registration');
              }
        }
      };
  });

  app.factory('ticketMessage', function(){
          return {
                tData: function(data){
                      console.log(data);
                      return data;
                      
                }
          }

  });