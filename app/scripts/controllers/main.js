'use strict';


var mytodoApp=angular.module('mytodoApp')
mytodoApp.config(['$httpProvider', function ($httpProvider) { 
 $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

}]);

  mytodoApp.controller('MainCtrl', function ($location,$http,$q,$scope,$route,$rootScope) {
    var user = null;
 var authenticatedUser = null;
  // var apiUrl = 'http://172.16.42.28:3000/';

  $scope.submitForm = function(isValid) {


         var deferred = $q.defer();
    
  if(isValid){

//---------------------------------------------------------------------------------------------------------------------
         // $http.setRequestHeader("Access-Control-Allow-Origin","*");
         

 $http.post('http://ency.nfndev.com/create','username=' + this.user.nam + '&email=' + this.user.email + '&password=' + this.user.pwd)

 .success(function(userData) {
    authenticatedUser = userData;
    console.log(userData);
    console.log(userData.token);
    deferred.resolve(authenticatedUser);
})
 .error(function(error) {
      deferred.error(error);
})
 .then(
 function (userData) {
 if (userData.status == 201)
 {    
  alert("user id already exist");
  $route.reload();
 $location.path('/signup');
 }
 else{
  // $scope.v=userData.token;
  alert("successfully signed up");
 $location.path('/login');
 }
 },

 function (error) {
 $scope.loginError = error;
 });

}
    else
    {
      alert("details missing");
    }      
         
//   $http({
//  method : 'POST',
//  url : 'http://10.0.1.36:3000//users/create',
//  // data : 'username=' + this.user.nam + '&email=' + this.user.email + '&password=' + this.user.pwd,
//  data    : formData,
//  headers : { 'Content-Type': undefined },
//   transformRequest: function(data, headersGetterFunction) {
//             return data;
//         }
//  })
// .success(function(data) {
//         $scope.openModal.hide();
//     });
// $scope.flag=1;
//     // check to make sure the form is completely valid
                 
           
//       $http({
//             method : "POST",
//             url : 'http://172.16.42.25:3000/users/create?',
//             data : 'username=' + this.user.nam + '&email=' + this.user.email + '&password=' + this.user.pwd,
           
//             headers : {
//                 'Content-Type' : 'application/x-www-form-urlencoded'
//             }
//            })
//             .success(function(){
//         });
//            $scope.list1.push(this.user.nam);
//            $scope.list2.push(this.user.email);
//            $scope.list3.push(this.user.pwd); 
//            $scope.user.nam = '';
//            $scope.user.email = '';
//            $scope.user.pwd = '';
      
//            alert('our form is amazing');


       
       
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
