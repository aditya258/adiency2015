'use strict';

angular.module('mytodoApp')
  .controller('searchinCtrl', function ($scope,$http,$route,$location,$q) {
  	
  	 var user = null;

 var authenticatedUser = null;
 $scope.random = function () {
                   var deferred = $q.defer();
                    $http.get('http://ency.nfndev.com/pages/random')
                     .success(function(userData) {
 authenticatedUser = userData;

  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 }).then(
 function (userData) {
 	localStorage["articles"] = JSON.stringify(userData);
 if(localStorage.tok == '5678a3b3af02fbcd9b7d249e54d40246')
     {
       $location.path('/admin');
  $route.reload();
     }
     else{
  $location.path('/searchin');
  $route.reload();
}
 });
};
$scope.latest = function () {
                   var deferred = $q.defer();
                    $http.get('http://ency.nfndev.com/pages/latest')
                     .success(function(userData) {
 authenticatedUser = userData;

  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 }).then(
 function (userData) {
 	localStorage["articles"] = JSON.stringify(userData);
 if(localStorage.tok == '5678a3b3af02fbcd9b7d249e54d40246')
     {
       $location.path('/admin');
  $route.reload();
     }
     else{
  $location.path('/searchin');
  $route.reload();
}
 });
};

  	   });