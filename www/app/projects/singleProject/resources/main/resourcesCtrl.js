angular.module('app.controllers').controller('ResourcesCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'SingleProjectService', 'ResourcesService','SingleResourceService', 'ProjectsService',
function($rootScope, $scope, $location, $stateParams, SingleProjectService, ResourcesService, SingleResourceService, ProjectsService) {
  $scope.shouldShowReorder = false;
  $scope.shouldShowDelete = false;
  function getResources(){
    ResourcesService.getResources($stateParams.projectId).then(function(success){
      ResourcesService.resources = success;
    });
  }
  SingleProjectService.getProject($stateParams.projectId).then(function(success){
    SingleProjectService.project = success;
  });
  $scope.deleteResource = function(projectId, resourceId, index){
    SingleResourceService.deleteResource(projectId,resourceId).then(function(success){
      SingleProjectService.project.resources.splice(index,1);
      console.log("index supprimé: "+index);
    });
  };
  $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    ResourcesService.resources.splice(fromIndex, 1);
    ResourcesService.resources.splice(toIndex, 0, item);
  };
  getResources();
  
  $scope.$watch(function () { return ResourcesService.resources }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.resources = ResourcesService.resources;
      }
  });
  $scope.$watch(function () { return SingleProjectService.project }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.project = SingleProjectService.project;
      }
  });
}]);
