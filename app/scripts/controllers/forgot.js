'use strict';

angular.module('mytodoApp')
  .controller('forgotCtrl', function ($scope,$http,$route,$q) {
     var user = null;
 var authenticatedUser = null;
  	     $scope.forpassword = function (isValid) {
                   var deferred = $q.defer();

  	     	if(!isValid){
        alert("enter Email ID");
      		}
      		else{
              // $http.setRequestHeader("Access-Control-Allow-Origin","*");
               // $http.get('http://ency.nfndev.com/send?email=' + this.mailid)

      			  $http.post('http://ency.nfndev.com/send','email=' + this.mailid)
      			  .success(function(userData) {
 authenticatedUser = userData;
  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 });
      		}

  	     };

  	   });