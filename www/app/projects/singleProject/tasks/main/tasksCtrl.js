angular.module('app.controllers').controller('TasksCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'SingleProjectService', 'TasksService','SingleTaskService', 'ProjectsService',
function($rootScope, $scope, $location, $stateParams, SingleProjectService, TasksService, SingleTaskService, ProjectsService) {
  $scope.shouldShowReorder = false;
  $scope.shouldShowDelete = false;
  function getTasks(){
    TasksService.getTasks($stateParams.projectId).then(function(success){
      TasksService.tasks = success;
    });
  }
  SingleProjectService.getProject($stateParams.projectId).then(function(success){
    SingleProjectService.project = success;
  });
  $scope.deleteTask = function(projectId, taskId, index){
    SingleTaskService.deleteTask(projectId,taskId).then(function(success){
      SingleProjectService.project.tasks.splice(index,1);
      console.log("index supprimé: "+index);
    });
  };
  $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    TasksService.tasks.splice(fromIndex, 1);
    TasksService.tasks.splice(toIndex, 0, item);
  };
  getTasks();
  $scope.$watch(function () { return TasksService.tasks }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.tasks = TasksService.tasks;
      }
  });
  $scope.$watch(function () { return SingleProjectService.project }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.project = SingleProjectService.project;
      }
  });
}]);
