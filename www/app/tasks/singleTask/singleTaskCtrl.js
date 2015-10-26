angular.module('app.controllers').controller('SingleTaskCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams','SingleTaskService', 'SingleProjectService',
function($rootScope, $scope, $location, $stateParams,SingleTaskService, SingleProjectService) {
  SingleProjectService.getProject($stateParams.projectId).then(function(success){
    $scope.project = success;
  });

  SingleTaskService.getTask($stateParams.taskId).then(function(success){
    $scope.task = success;
  });

}]);
