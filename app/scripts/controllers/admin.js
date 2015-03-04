'use strict';

angular.module('mytodoApp')
  .controller('adminCtrl', function ($scope,$http,$route,$location,$q) {
  	var user = null;

 var authenticatedUser = null;
 $scope.v=false;
 if(localStorage.tok == '5678a3b3af02fbcd9b7d249e54d40246')
  $scope.v=true;
  	$scope.userdisp = function () {
                   var deferred = $q.defer();
                    $http.get('http://ency.nfndev.com/pages/userdisp')
                     .success(function(userData) {
 authenticatedUser = userData;
$scope.users=userData;
  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 });
 // .then(
 // function (userData) {
//  	localStorage["articles"] = JSON.stringify(userData);
//  if(localStorage.tok == '5678a3b3af02fbcd9b7d249e54d40246')
//      {
//        $location.path('/admin');
//   $route.reload();
//      }
//      else{
//   $location.path('/searchin');
//   $route.reload();
// }
 // });
};
$scope.userdel = function () {
                   var deferred = $q.defer();
console.log($scope.name1);
                    $http.get('http://ency.nfndev.com/pages/userdel?name=' + $scope.name1)
                     .success(function(userData) {
 authenticatedUser = userData;
// $scope.users=userData;
  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 }).then(
 function (userData) {
 	if(userData.status == 200){
 		alert("user hass been deleted");
 		$route.reload();
 		$location.path('/deleteuser');
 	}
 });
};

$scope.articledisp = function () {
                   var deferred = $q.defer();
                    $http.get('http://ency.nfndev.com/pages/pagedisp')
                     .success(function(userData) {
 authenticatedUser = userData;
 $scope.arti=userData;
  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 });
};

$scope.articledel = function () {
                   var deferred = $q.defer();
// console.log($scope.name1);
                    $http.get('http://ency.nfndev.com/pages/pagedel?pname=' + $scope.page1)
                     .success(function(userData) {
 authenticatedUser = userData;
// $scope.users=userData;
  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 }).then(
 function (userData) {
 	if(userData.status == 200){
 		alert("article has been deleted");
 		$route.reload();
 		$location.path('/deletearticle');
 	}
 });
};

$scope.chk = function () {
if($scope.top1 == 1)
  $scope.a=true;
else
  $scope.a=false;
};

$scope.createarti = function () {
                   var deferred = $q.defer();
console.log($scope.topic);
console.log($scope.cat);
console.log($scope.section);
console.log($scope.cont);


 $http.get('http://ency.nfndev.com/pages/save?page=' + $scope.topic + '&cat=' + $scope.cat + '&sname=' + $scope.section + '&scontent=' + $scope.cont)
  .success(function(userData) {
 authenticatedUser = userData;
// $scope.users=userData;
  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 })
 .then(
 function (userData) {
  if(userData.status == 200){
    alert("article has been created");
    $route.reload();
    $location.path('/admin');
  }
 });
};

  });