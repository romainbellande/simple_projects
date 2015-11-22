angular.module('app.controllers').controller('EditProjectCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'SingleProjectService', '$ionicPopover', 'EditProjectService', 'ProjectsService', 'GlobalService',
  function($rootScope, $scope, $location, $stateParams, SingleProjectService, $ionicPopover, EditProjectService, ProjectsService, GlobalService) {

    SingleProjectService.getProject($stateParams.projectId).then(function(success){
      $scope.project = success;
    });

    $scope.editProject = function(project){

        console.log("project: ",project);
        EditProjectService.editProject(project,$stateParams.projectId)
        .then(function(success){
          ProjectsService.projects[SingleProjectService.index] = success;
          GlobalService.showPopup1("Project edited successfully !",'/projects/'+$stateParams.projectId+'/'+SingleProjectService.index+'/single-project',$scope);
          console.log("mon projet maj", success);
          $rootScope.project = success;
      },function(error){
            console.log(error);
          });
    };

$scope.$watch(ProjectsService.projects,function(){
    console.log("projects maj");
});
  }]);
