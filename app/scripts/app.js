'use strict';


angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
       .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'searchCtrl'
      })
       .when('/searchin', {
        templateUrl: 'views/searchin.html',
        controller: 'searchinCtrl'
      })
       .when('/forgot', {
        templateUrl: 'views/forgot.html',
        controller: 'forgotCtrl'
      })
       .when('/searchauth', {
        templateUrl: 'views/searchauth.html',
        controller: 'searchCtrl'
      })
        .when('/searchunauth', {
        templateUrl: 'views/searchunauth.html',
        controller: 'searchCtrl'
      })
       .when('/authdetail', {
        templateUrl: 'views/authdetail.html',
        controller: 'AboutCtrl'
      })
        .when('/edit', {
        templateUrl: 'views/editarticle.html',
        controller: 'editCtrl'
      })
        .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
      })
        .when('/adminser', {
        templateUrl: 'views/adminser.html',
        controller: 'searchCtrl'
      })
        .when('/deleteuser', {
        templateUrl: 'views/deluser.html',
        controller: 'adminCtrl'
      })
        .when('/deletearticle', {
        templateUrl: 'views/delarticle.html',
        controller: 'adminCtrl'
      })
         .when('/revisionhistory', {
        templateUrl: 'views/revision.html',
        controller: 'revisionCtrl'
      })
          .when('/createarticle', {
        templateUrl: 'views/create.html',
        controller: 'adminCtrl'
      })
      .otherwise({
        redirectTo: '/search'
      });
  });
