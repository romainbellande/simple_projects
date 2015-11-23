angular.module('app.controllers').controller('SingleTaskCtrl', [
    '$rootScope', '$scope', '$location', '$stateParams','SingleTaskService', 'SingleProjectService',
    function($rootScope, $scope, $location, $stateParams,SingleTaskService, SingleProjectService) {

        if($stateParams.taskIndex != -1){
            SingleTaskService.index = $stateParams.taskIndex;
        }
        SingleProjectService.getProject($stateParams.projectId).then(function(success){
            $scope.project = success;
        });

        SingleTaskService.getTask($stateParams.projectId, $stateParams.taskId).then(function(success){
            $scope.task = success;
        });

    }]);
