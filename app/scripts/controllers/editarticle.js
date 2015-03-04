'use strict';

angular.module('mytodoApp')
  .controller('editCtrl', function ($scope,$http,$route,$q,$location) {
  	
$scope.sec=[JSON.parse(localStorage["articles"])];
 $scope.pageid=JSON.parse(localStorage["articles"]).data.content.page_id;
$scope.con=false;
if (localStorage["articles"] != '' )
$scope.con=true;
 // console.log($scope.pageid);
var user = null;

 var authenticatedUser = null;
     $scope.submitname = function () {
 
     

var deferred = $q.defer();

  $http.get('http://ency.nfndev.com/pages/updates?sname=' + $scope.secname + '&pageid=' + $scope.pageid)

 .success(function(userData) {
          $scope.editcon =  userData.content;  
 // authenticatedUser = userData.token;
  console.log(userData.content);
    // console.log(userData.status);
 // deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 });
 };
 // .then(
 // function (userData) {
 //  // $scope.detail = 'hi';
 // if (userData.status == 201)
 // {
 // alert("invalid credentials");
 //  window.location.reload();
 //  $location.path('/login');
 // }
 // else{
 //   console.log(userData.data.token);
 //    window.localStorage['uname'] = userData.data.username;
 //   window.localStorage['umail'] = userData.data.email;

 //        window.location.reload();
 //   $location.path('/searchin');
   

 // }
 
 // },
 // function (error) {
 // $scope.loginError = error;
 // }
 // );

 $scope.submitcont= function () {
 
     

var deferred = $q.defer();

  $http.get('http://ency.nfndev.com/pages/update1?sname=' + $scope.secname + '&pageid='+ $scope.pageid + '&scontent=' + $scope.editcon )

 .success(function(userData) {
          
  console.log(userData.content);
   

 }).error(function(error) {
 deferred.error(error);
 }).then(
  function (userData) {

  if (userData.status == 200){
alert("the article has been edited");
window.location.reload();
   $location.path('/search');

  }

 },
 function (error) {
 $scope.loginError = error;
 });
 };
  	   });