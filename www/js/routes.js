"use strict";

var routes = function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('init', {
    url: '/',
    templateUrl: 'templates/init.html'
  })
  .state('login',{
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('create-account',{
    url: '/create-account',
    templateUrl: 'templates/create-account.html'
  })
  .state('home',{
    url: '/home',
    templateUrl: 'templates/home.html'
  })
  .state('create-project',{
    url: '/create-project',
    templateUrl: 'templates/create-project.html'
  })
  .state('single-project',{
    url: '/single-project',
    templateUrl: 'templates/single-project.html'
  })
  .state('tasks',{
    url: '/tasks',
    templateUrl: 'templates/tasks.html'
  });
}

  angular
    .module('app')
    .config(routes);
