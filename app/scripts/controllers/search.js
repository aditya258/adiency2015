'use strict';

angular.module('mytodoApp')
  .controller('searchCtrl', function ($scope,$http,$route,$q,$location) {
  	var user = null;
 var authenticatedUser = null;

  	     $scope.submitmysearch = function (isValid) {
                   var deferred = $q.defer();

  	     	if(!isValid){
        alert("enter a search term");
      		}
      		else{
              // $http.setRequestHeader("Access-Control-Allow-Origin","*");
               // $http.get('http://ency.nfndev.com/send?email=' + this.mailid)

      			  $http.get('http://ency.nfndev.com/pages/read?pagename=' + this.word)
      			  .success(function(userData) {
 authenticatedUser = userData;

  console.log(userData);
 deferred.resolve(authenticatedUser);

 }).error(function(error) {
 deferred.error(error);
 }).then(
 function (userData) {
 	 if (userData.status == 200){
 	 	 // $scope.coll = userData;
              // localStorage.pageid = userData.data.content.page_id;

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
 	 }
 else{
 	alert("invalid search term");
 $route.reload();
  // $location.path('/search');
 }
 },
 function (error) {
 $scope.loginError = error;
 }
 );
      		}

  	     };
         if (localStorage["articles"] != '')
          $scope.coll = [JSON.parse(localStorage["articles"])];

  	   });