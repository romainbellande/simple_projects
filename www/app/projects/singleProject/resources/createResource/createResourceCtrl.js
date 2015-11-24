angular.module('app.controllers').controller('CreateResourceCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'CreateResourceService', 'ResourcesService', 'SingleProjectService', 'GlobalService',
  function($rootScope, $scope, $location, $stateParams, CreateResourceService, ResourcesService, SingleProjectService, GlobalService) {

    SingleProjectService.getProject($stateParams.projectId).then(function(success){
      $scope.project = success;
    });
    var isDisabled = false;
    $scope.createResource = function(resource){
      if(!isDisabled){
        isDisabled = true;
        console.log(resource);
        CreateResourceService.createResource(resource,$stateParams.projectId).then(function(success){

          ResourcesService.resources.push(success);
          GlobalService.showPopup1("Resource created successfully !",'/resources/'+$stateParams.projectId,$scope);
          isDisabled = false;
        },function(error){
          console.log(error);
          isDisabled = false;
        });
      }
    };

  }]);
