angular.module('app.controller.home', [])
.config(function($routeProvider) {

  $routeProvider

  .when('/home', {
    templateUrl: 'controllers/home/home.html'
  })

});