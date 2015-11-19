angular.module('app.controllers').controller('CreateTaskCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'CreateTaskService', 'TasksService', 'SingleProjectService', 'GlobalService',
  function($rootScope, $scope, $location, $stateParams, CreateTaskService, TasksService, SingleProjectService, GlobalService) {

    SingleProjectService.getProject($stateParams.projectId).then(function(success){
      $scope.project = success;
    });
    var isDisabled = false;
    $scope.createTask = function(task){
      if(!isDisabled){
        isDisabled = true;
        console.log(task);
        CreateTaskService.createTask(task,$stateParams.projectId).then(function(success){

          TasksService.tasks.push(success);
          GlobalService.showPopup1("Task created successfully !",'/tasks/'+$stateParams.projectId,$scope);
          isDisabled = false;
        },function(error){
          console.log(error);
          isDisabled = false;
        });
      }
    };

  }]);
