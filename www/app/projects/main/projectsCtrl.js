angular.module('app.controllers').controller('ProjectsCtrl', [
  '$rootScope', '$scope', '$location', 'ProjectsService', 'GlobalService', '$ionicPopover',
function($rootScope, $scope, $location, ProjectsService, GlobalService, $ionicPopover) {


  $scope.shouldShowReorder = false;
  $scope.shouldShowDelete = false;
  $scope.user = GlobalService.$storage.user;
/*
  $ionicPopover.fromTemplateUrl('app/menu/menuTpl.html', {
      scope: $scope,
    }).then(function(menu) {
      $scope.menu = menu;
    });*/

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

  $scope.$watch(function () { return ProjectsService.projects }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.projects = ProjectsService.projects;
      }
  });

}]);
