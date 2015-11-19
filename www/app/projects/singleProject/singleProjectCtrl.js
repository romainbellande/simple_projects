angular.module('app.controllers').controller('SingleProjectCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'SingleProjectService', '$ionicPopover',
function($rootScope, $scope, $location, $stateParams, SingleProjectService, $ionicPopover) {

  SingleProjectService.getProject($stateParams.projectId).then(function(success){
    $scope.project = success;
  });
  if($stateParams.projectIndex != -1){
    SingleProjectService.index = $stateParams.projectIndex;
  }

}]);
