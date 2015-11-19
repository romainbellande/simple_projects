angular.module('app.controllers').controller('EditProjectCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'SingleProjectService', '$ionicPopover', 'EditProjectService', 'ProjectsService',
  function($rootScope, $scope, $location, $stateParams, SingleProjectService, $ionicPopover, EditProjectService, ProjectsService) {

    SingleProjectService.getProject($stateParams.projectId).then(function(success){
      $scope.project = success;
    });
    $scope.editProject = function(project){
      EditProjectService.editProject(project,$stateParams.projectId)
      .then(function(success){

      });
    };
    $scope.test = function(){
      console.log("projects: ",ProjectsService.projects[SingleProjectService.index]);
    };


  }]);
