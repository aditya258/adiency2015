'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
  	 $scope.todos = [];
  	 $scope.addTodo = function () {
  $scope.todos.push($scope.todo);
  $scope.todo = '';
};
 $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
     $scope.list1 = [];
          $scope.list2 = [];

     $scope.list3 = [];
  $scope.submitForm = function(isValid, $http) {
$scope.flag=1;
    // check to make sure the form is completely valid
    if (isValid) { 
          alert('our form is amazing');
          $scope.list1.push(this.user.nam);
           $scope.list2.push(this.user.email);
           $scope.list3.push(this.user.pwd);
           $scope.user.nam = '';
           $scope.user.email = '';
           $scope.user.pwd = '';
           
      $http({
            method : 'POST',
            url : 'http://localhost:3000/users/create?',
            data : 'username=' + $scope.user.nam + '&email=' + $scope.user.email + '&password=' + $scope.user.pwd,
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })

       }
       else{
        alert('details missing');
       }
      // if ($scope.user.nam) {
      //      $scope.list1.push(this.user.nam);
      //     // $scope.user.nam = '';
      //    }
      // //   else {
      // //     $scope.flag=0;
      // //     alert('fill in user name');
      // //   }
      //    if ($scope.user.email) {
      //      $scope.list2.push(this.user.email);
      //    //  $scope.user.email = '';
      //    }
      // //    else {
      // //     $scope.flag=0;
      // //     alert('fill in user emailid');
      // //   }
      //    if ($scope.user.pwd) {
      //      $scope.list3.push(this.user.pwd);
      //    //  $scope.user.pwd = '';
      //    }
      //    else {
      //     $scope.flag=0;
      //     alert('fill in user password');
      //   }
      //   if($scope.flag==1){
     
      

    

  };
      
      // $scope.validate = function() {
      //   if ($scope.nam) {
      //     $scope.list1.push(this.nam);
      //     $scope.nam = '';
      //   }
      //   if ($scope.mailid) {
      //     $scope.list2.push(this.mailid);
      //     $scope.mailid = '';
      //   }
      //   if ($scope.pwd) {
      //     $scope.list3.push(this.pwd);
      //     $scope.pwd = '';
      //   }
      //   };

    
  });
