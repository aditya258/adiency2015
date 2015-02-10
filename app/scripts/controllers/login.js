'use strict';
/**
 * @ngdoc function
 * @name mytodoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('loginCtrl', function ($scope) {
  	 $scope.list2 = [];

     $scope.list3 = [];

  	 $scope.submitmyform = function(isValid, $http) {
  	 $scope.flag=1;
  	 if (isValid) { 

  	 	 	alert('our form is amazing');
  	 	 	 $scope.list2.push(this.lemail);
  	 	 	 $scope.list3.push(this.lpwd);
  	 	 	 $scope.lemail='';
  	 	 	 $scope.lpwd='';
  	 	}
  	 	else{
  	 		alert('details missing');
  	 	}
  	 	// if ($scope.lemail) {
     //      $scope.list2.push(this.lemail);
     //      $scope.lemail = '';
     //    }
     //    else {
     //      $scope.flag=0;
     //      alert('fill in user emailid');
     //    }

  	 	// if ($scope.lpwd) {
     //      $scope.list3.push(this.lpwd);
     //      $scope.lpwd = '';
     //    }
     //    else {
     //      $scope.flag=0;
     //      alert('fill in user password');
     //    }
     //    if($scope.flag==1){

      
    };
   });