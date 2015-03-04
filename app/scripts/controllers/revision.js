'use strict';

angular.module('mytodoApp')
  .controller('revisionCtrl', function ($scope,$http,$route,$q,$location) {
  	var user = null;
 var authenticatedUser = null;
 $scope.pageid=JSON.parse(localStorage["articles"]).data.content.page_id;
 $scope.sec=[JSON.parse(localStorage["articles"])];
if(localStorage["articles"] == ''){
	alert("search for the page to revised");
	$route.reload();
}
$scope.v=false;
 $scope.secsubmit = function () {
$scope.v=true;
var deferred = $q.defer();

  $http.get('http://ency.nfndev.com/pages/rh?pid=' + $scope.pageid + '&sname=' + $scope.secname1)

 .success(function(userData) {
 	 $scope.revise =  userData;
 // authenticatedUser = userData.token;
  // console.log(userData.content);
    console.log(userData);

 // deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 });
};

$scope.revi = function () {
// $scope.v=true;
var deferred = $q.defer();

  $http.get('http://ency.nfndev.com/pages/und?pid=' + $scope.pageid + '&sname=' + $scope.secname1)

 .success(function(userData) {
            
 // authenticatedUser = userData.token;
  // console.log(userData.content);
    console.log(userData);
 // deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 }).then(
 function (userData) {
 	if(userData.status == 200){
 		alert("article has been revised");
 		$route.reload();
 		$location.path('/');
 	}
 });
};
});