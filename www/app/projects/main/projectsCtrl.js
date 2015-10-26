angular.module('app.controllers').controller('ProjectsCtrl', [
  '$rootScope', '$scope', '$location', 'ProjectsService', 'GlobalService',
function($rootScope, $scope, $location, ProjectsService, GlobalService) {


  $scope.shouldShowReorder = false;
  $scope.shouldShowDelete = false;
  $scope.user = GlobalService.$storage.user;
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
  $scope.moveItem = function(item, fromIndex, toIndex) {
      //Move the item in the array
      ProjectsService.projects.splice(fromIndex, 1);
      ProjectsService.projects.splice(toIndex, 0, item);
    };
  getProjects();

}]);
