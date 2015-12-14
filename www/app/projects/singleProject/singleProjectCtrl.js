angular.module('app.controllers').controller('SingleProjectCtrl', [
    '$rootScope', '$scope', '$location', '$stateParams', 'SingleProjectService', '$ionicPopover', 'ProjectsService', 'ResourcesService', 'TasksService',
    function($rootScope, $scope, $location, $stateParams, SingleProjectService, $ionicPopover,ProjectsService, ResourcesService, TasksService) {
        if($stateParams.projectIndex != -1){
            SingleProjectService.index = $stateParams.projectIndex;
        }

        function getProject(){
            SingleProjectService.getProject($stateParams.projectId).then(function(success){
                SingleProjectService.project = success;
            },function(error){
                console.log("getProject() failed !");
            });
        }
        getProject();
        // Genius function <3 <3 <3
        $scope.$watch(function () { return SingleProjectService.project }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.project = SingleProjectService.project;
                ProjectsService.projects[SingleProjectService.index] = SingleProjectService.project;
            }
        });
        // Get resources
        ResourcesService.getResources($stateParams.projectId).then(function(success){
          ResourcesService.resources = success;
        });

        TasksService.getTasks($stateParams.projectId).then(function(success){
            TasksService.tasks = success;
        });



    }]);
