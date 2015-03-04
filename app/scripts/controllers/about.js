'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('AboutCtrl', function ($scope,$location,$route) {

   $scope.uname= window.localStorage['uname'];
  $scope.umail=window.localStorage['umail'];
  $scope.back = function(){
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
    // $scope.vari1=localStorage.tok ;
    // if($scope.vari1 == 'undefined')
    // 	$scope.vari=true;
    // else
    // 	$scope.vari=false;
  });
