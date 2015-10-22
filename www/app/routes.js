"use strict";

var routes = function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('portal', {
    url: '/',
    templateUrl: 'app/portal/main/portalTpl.html'
  })
  .state('portal/login',{
    url: '/portal/login',
    templateUrl: 'app/portal/login/loginTpl.html'
  })
  .state('portal/create-account',{
    url: '/portal/create-account',
    templateUrl: 'app/portal/createAccount/createAccountTpl.html'
  })
  .state('projects',{
    url: '/projects',
    templateUrl: 'app/projects/main/projectsTpl.html'
  })
  .state('projects/create-project',{
    url: '/projects/create-project',
    templateUrl: 'app/projects/createProject/createProjectTpl.html'
  })
  .state('projects/single-project',{
    url: '/projects/:projectId/single-project',
    templateUrl: 'app/projects/singleProject/singleProjectTpl.html'
  })
  .state('tasks',{
    url: '/tasks/:projectId',
    templateUrl: 'app/tasks/main/tasksTpl.html'
  })
  .state('tasks/create-task',{
    url: '/tasks/create-task',
    templateUrl: 'app/tasks/createTask/createTaskTpl.html'
  })
  .state('tasks/single-task',{
    url: '/tasks/single-task',
    templateUrl: 'app/tasks/singleTask/singleTaskTpl.html'
  });
}

  angular
    .module('app')
    .config(routes);
