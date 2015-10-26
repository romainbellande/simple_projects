angular.module('app.controllers').controller('CreateTaskCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'CreateTaskService', 'TasksService', 'SingleProjectService', 'GlobalService',
function($rootScope, $scope, $location, $stateParams, CreateTaskService, TasksService, SingleProjectService, GlobalService) {

  SingleProjectService.getProject($stateParams.projectId).then(function(success){
    $scope.project = success;
  });

  $scope.createTask = function(task){
    console.log(task);
    CreateTaskService.createTask(task,$stateParams.projectId).then(function(success){
      console.log(success);
      TasksService.tasks.push(success);
      GlobalService.showPopup1("Task created successfully !",'/tasks/'+$scope.project._id,$scope);
    },function(error){
      console.log(error);
    });
  };

}]);
