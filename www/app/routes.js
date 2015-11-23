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
    url: '/projects/create-project/',
    templateUrl: 'app/projects/createProject/createProjectTpl.html'
  })
  .state('projects/single-project',{
    url: '/projects/:projectId/:projectIndex/single-project',
    templateUrl: 'app/projects/singleProject/singleProjectTpl.html'
  })
  .state('projects/edit-project',{
    url: '/projects/:projectId/edit-project',
    templateUrl: 'app/projects/singleProject/editProject/editProjectTpl.html'
  })
  .state('tasks',{
    url: '/tasks/:projectId',
    templateUrl: 'app/projects/singleProject/tasks/main/tasksTpl.html'
  })
  .state('tasks/create-task',{
    url: '/tasks/create-task/:projectId',
    templateUrl: 'app/projects/singleProject/tasks/createTask/createTaskTpl.html'
  })
  .state('tasks/single-task',{
    url: '/tasks/:projectId/:taskId/:taskIndex/single-task',
    templateUrl: 'app/projects/singleProject/tasks/singleTask/singleTaskTpl.html'
  })
  .state('tasks/edit-task',{
    url: '/tasks/:projectId/:taskId/edit-task',
    templateUrl: 'app/projects/singleProject/tasks/singleTask/editTask/editTaskTpl.html'
  });
}

  angular
    .module('app')
    .config(routes);
