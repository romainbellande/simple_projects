angular.module('app.controllers').controller('TasksCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'SingleProjectService', 'TasksService','SingleTaskService',
function($rootScope, $scope, $location, $stateParams, SingleProjectService, TasksService, SingleTaskService) {
  $scope.shouldShowReorder = false;
  $scope.shouldShowDelete = false;

  function getTasks(){
    TasksService.getTasks($stateParams.projectId).then(function(success){
      TasksService.tasks = success;
      $scope.tasks = TasksService.tasks;
    });
  }
  SingleProjectService.getProject($stateParams.projectId).then(function(success){
    $scope.project = success;
  });
  $scope.deleteTask = function(projectId, taskId, index){
    SingleTaskService.deleteTask(projectId,taskId).then(function(success){
      TasksService.tasks.splice(index,1);
      console.log("index supprimé: "+index);
    });
  };
  $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    TasksService.tasks.splice(fromIndex, 1);
    TasksService.tasks.splice(toIndex, 0, item);
  };
  getTasks();
}]);
