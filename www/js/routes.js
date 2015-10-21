"use strict";

var routes = function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('portal/main', {
    url: '/',
    templateUrl: 'portal/main/portalTpl.html'
  })
  .state('portal/login',{
    url: '/portal/login',
    templateUrl: 'portal/login/loginTpl.html'
  })
  .state('portal/create-account',{
    url: '/portal/create-account',
    templateUrl: 'portal/createAccount/createAccountTpl.html'
  })
  .state('projects',{
    url: '/projects',
    templateUrl: 'projects/main/projectsTpl.html'
  })
  .state('/projects/create-project',{
    url: '/projects/create-project',
    templateUrl: 'projects/createProject/createProjectTpl.html'
  })
  .state('/projects/single-project',{
    url: '/projects/single-project',
    templateUrl: 'projects/singleProject/singleProjectTpl.html'
  })
  .state('tasks',{
    url: '/tasks',
    templateUrl: 'tasks/main/tasksTpl.html'
  })
  .state('tasks/create-task',{
    url: '/tasks/create-task',
    templateUrl: 'tasks/createTask/createTaskTpl.html'
  })
  .state('tasks/single-task',{
    url: '/tasks/single-task',
    templateUrl: 'tasks/singleTask/singleTaskTpl.html'
  });
}

  angular
    .module('app')
    .config(routes);
