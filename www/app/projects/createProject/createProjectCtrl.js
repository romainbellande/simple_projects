angular.module('app.controllers').controller('CreateProjectCtrl', [
  '$rootScope', '$scope', '$location', 'CreateProjectService', 'ProjectsService', 'GlobalService',
function($rootScope, $scope, $location, CreateProjectService, ProjectsService, GlobalService) {
  $scope.createProject = function(project){

    console.log(project);
    CreateProjectService.createProject(project).then(function(success){
      console.log(success);
      ProjectsService.projects.push(success);
      GlobalService.showPopup1("Project created successfully !",'projects',$scope);
    },function(error){
      console.log(error);
    });
  };


}]);
