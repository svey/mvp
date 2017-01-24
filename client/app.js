var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    controller: 'SigninController',
    templateUrl: '/client/views/signin.html'
  })

  .when('/signin', {
    controller: 'SigninController',
    templateUrl: '/client/views/signin.html'
  })

  .when('/signup', {
    controller: 'SignupController',
    templateUrl: '/client/views/signup.html'
  })

  .when('/home', {
    controller: 'HomeController',
    templateUrl: '/client/views/home.html'
  })

  .otherwise({
    redirectTo: '/'
  });
});