angular.module('app.controllers').controller('EditTaskCtrl', [
    '$rootScope', '$scope', '$location', '$stateParams', 'SingleTaskService', '$ionicPopover', 'EditTaskService', 'TasksService', 'GlobalService', 'ProjectsService', 'SingleProjectService',
    function($rootScope, $scope, $location, $stateParams, SingleTaskService, $ionicPopover, EditTaskService, TasksService, GlobalService, ProjectsService, SingleProjectService) {



        $scope.editTask = function(task){


            EditTaskService.editTask($stateParams.projectId,$stateParams.taskId,task)
            .then(function(success){
                TasksService.tasks[SingleTaskService.index] = success;
                GlobalService.showPopup1("Task edited successfully !",'/tasks/'+$stateParams.projectId+'/'+$stateParams.taskId+'/-1/single-task',$scope);
                console.log("projet entier maj", success);
            },function(error){
                console.log(error);
            });
        };
        $scope.$watch(function () { return SingleProjectService.project }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.project = SingleProjectService.project;
            }
        });
        $scope.$watch(function () { return TasksService.tasks[SingleTaskService.index] }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.task = TasksService.tasks[SingleTaskService.index];
            }
        });

    }]);
