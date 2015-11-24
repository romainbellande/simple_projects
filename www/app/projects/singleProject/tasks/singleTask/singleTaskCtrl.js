angular.module('app.controllers').controller('SingleTaskCtrl', [
    '$rootScope', '$scope', '$location', '$stateParams','SingleTaskService', 'SingleProjectService', 'TasksService',
    function($rootScope, $scope, $location, $stateParams,SingleTaskService, SingleProjectService, TasksService) {

        if($stateParams.taskIndex != -1){
            SingleTaskService.index = $stateParams.taskIndex;
        }
        SingleProjectService.getProject($stateParams.projectId).then(function(success){
            SingleProjectService.project = success;
        });

        SingleTaskService.getTask($stateParams.projectId, $stateParams.taskId).then(function(success){
            SingleTaskService.task = success;
        });

        $scope.$watch(function () { return SingleTaskService.task }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.task = SingleTaskService.task;
                TasksService.tasks[SingleTaskService.index] = SingleTaskService.task;
            }
        });
        $scope.$watch(function () { return SingleProjectService.project }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.project = SingleProjectService.project;
            }
        });

    }]);
