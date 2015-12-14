angular.module('app.controllers').controller('CreateProjectCtrl', [
  '$rootScope', '$scope', '$location', 'CreateProjectService', 'ProjectsService', 'GlobalService',
function($rootScope, $scope, $location, CreateProjectService, ProjectsService, GlobalService) {
  var isDisabled = false;
  $scope.createProject = function(project){
    if(!isDisabled){
      isDisabled = true;
      console.log(project);
      CreateProjectService.createProject(project).then(function(success){
        console.log(success);
        ProjectsService.projects.push(success);
        GlobalService.showPopup1("Project created successfully !",'projects',$scope);
        isDisabled = false;
      },function(error){
        console.log(error);
        isDisabled = false;
      });
    }

  };


}]);
