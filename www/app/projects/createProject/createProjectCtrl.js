angular.module('app.controllers').controller('CreateProjectCtrl', [
  '$rootScope', '$scope', '$location', 'CreateProjectService', 'ProjectsService',
function($rootScope, $scope, $location, CreateProjectService, ProjectsService) {
  $scope.createProject = function(project){

    console.log(project);
    CreateProjectService.createProject(project).then(function(success){
      console.log(success);
      ProjectsService.projects.push(success);

    },function(error){
      console.log(error);
    });
  };


}]);
