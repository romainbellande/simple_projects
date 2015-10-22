angular.module('app.controllers').controller('ProjectsCtrl', [
  '$rootScope', '$scope', '$location', 'ProjectsService',
function($rootScope, $scope, $location, ProjectsService) {


  $scope.shouldShowReorder = false;
  $scope.shouldShowDelete = false;

  function getProjects(){
      ProjectsService.getProjects().then(function(success){
        ProjectsService.projects = success;
        $scope.projects = ProjectsService.projects;
      },function(error){
        $scope.login_info = "Query failed !";
      });
    }

  $scope.deleteProject = function(projectId, index){
    ProjectsService.deleteProject(projectId).then(function(success){
      ProjectsService.projects.splice(index,1);
    });
  }

  getProjects();

}]);
