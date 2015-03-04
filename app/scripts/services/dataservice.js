'use strict';

angular.module('mytodoApp')
 .factory('dataservice', 
  function ($location,$http,$q,$route) {
 var user = null;

 var authenticatedUser = 'hi';
 var apiUrl = 'http://172.16.42.2:3000/';
 return {
 
 login: function(uo)
 {
 
 
 var deferred = $q.defer();


  $http.post('http://ency.nfndev.com/users/login','email=' + uo.username +  '&password=' + uo.password)

 .success(function(userData) {
 authenticatedUser = userData.token;
  console.log(userData);
    // console.log(userData.status);

// $scope.v="hi";
  window.localStorage['tok'] = userData.token;
   // localStorage.tok = 'Remy';
 // $scope.$storage= $localStorage.$default({ tok: userData.token });
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 }).then(
 function (userData) {
  // $scope.detail = 'hi';
 if (userData.status == 201)
 {
 alert("invalid credentials");
  window.location.reload();
  $location.path('/login');
 }
 else{
  // console.log(userData.token);
   // $scope.detail = userData.token;
  //   console.log("$scope.details");
  //   console.log($scope.detail);
        window.location.reload();
   $location.path('/searchin');

 }
 
 },
 function (error) {
 $scope.loginError = error;
 }
 );
 return deferred.promise;
 }


 // logout: function()
 // {

 // var deferred = $q.defer();
 // $http({
 // method : 'POST',
 // url : apiUrl,
 // data : userToken,
 // headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
 // }).success(function(user)
 // {
 // authenticatedUser = null;
 // deferred.resolve(user);
 // }).error(function(error)
 // {
 // deferred.reject(error);
 // });
 // return deferred.promise;
 // }
 }
 
});