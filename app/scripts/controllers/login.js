'use strict';

angular.module('mytodoApp')
  .controller('loginCtrl', function ($scope,$location,$q,$route,$http) {
     // $scope.detail = 'hi';

 var user = null;

 var authenticatedUser = null;
     $scope.login = function (isValid) {
 
      if(!isValid){


        alert("details missing");
      }
      else{
 var uo = {};
 uo.username = $scope.lemail;
 uo.password = $scope.lpwd;

var deferred = $q.defer();


  $http.post('http://ency.nfndev.com/users/login','email=' + uo.username +  '&password=' + uo.password)

 .success(function(userData) {
                localStorage["articles"] = '';

 authenticatedUser = userData;
  console.log(userData);
    // console.log(userData.status);
  window.localStorage['tok'] = userData.token;
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

  if(userData.data.role == 'admin'){
    console.log(userData.data.role);
   console.log(userData.data.token);
     window.localStorage['uname'] = userData.data.username;
   window.localStorage['umail'] = userData.data.email;
           window.location.reload();

   $location.path('/admin');
  }
  else{
  console.log(userData.data.role);
   console.log(userData.data.token);
    window.localStorage['uname'] = userData.data.username;
   window.localStorage['umail'] = userData.data.email;

        window.location.reload();
   $location.path('/searchin');
   }

 }
 
 },
 function (error) {
 $scope.loginError = error;
 }
 );
 // dataservice.login(uo)
 
 }

  };

$scope.exist = function() {
         
   $location.path('/');
    };

$scope.direct = function() {
         
   if(localStorage.tok == '5678a3b3af02fbcd9b7d249e54d40246')
       $location.path('/admin');
     else
         $location.path('/searchin');


    };

  // $scope.det=dataservice.details;
   $scope.vari1=localStorage.tok ;
   $scope.con=false;
    if($scope.vari1 == 'undefined')
    	$scope.vari=true;
    else{
    	$scope.vari=false;
      if( localStorage["articles"] != '')
        $scope.con=true;
    }
    $scope.logout = function() {
    	   localStorage.tok = 'undefined';
         localStorage.uname = null;
         localStorage.umail = null;
         localStorage["articles"] = '';
    	       	window.location.reload();

		};

   });