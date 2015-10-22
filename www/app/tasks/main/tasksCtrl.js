angular.module('app.controllers').controller('TasksCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'ProjectsService',
function($rootScope, $scope, $location, $stateParams, ProjectsService) {
  $scope.shouldShowReorder = false;
  $scope.shouldShowDelete = false;
  $scope.tasks = new Array();

}]);
