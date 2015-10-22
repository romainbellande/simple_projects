angular.module('app.controllers').controller('SingleProjectCtrl', [
  '$rootScope', '$scope', '$location', '$stateParams', 'SingleProjectService',
function($rootScope, $scope, $location, $stateParams, SingleProjectService) {
  SingleProjectService.getProject($stateParams.projectId).then(function(success){
    $scope.project = success;
  });

}]);
