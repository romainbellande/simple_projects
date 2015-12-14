angular.module('app.controllers').controller('SingleResourceCtrl', [
    '$rootScope', '$scope', '$location', '$stateParams','SingleResourceService', 'SingleProjectService', 'ResourcesService',
    function($rootScope, $scope, $location, $stateParams,SingleResourceService, SingleProjectService, ResourcesService) {

        if($stateParams.resourceIndex != -1){
            SingleResourceService.index = $stateParams.resourceIndex;
        }
        SingleProjectService.getProject($stateParams.projectId).then(function(success){
            SingleProjectService.project = success;
        });

        SingleResourceService.getResource($stateParams.projectId, $stateParams.resourceId).then(function(success){
            SingleResourceService.resource = success;
        });

        $scope.$watch(function () { return SingleResourceService.resource }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.resource = SingleResourceService.resource;
                ResourcesService.resources[SingleResourceService.index] = SingleResourceService.resource;
            }
        });
        $scope.$watch(function () { return SingleProjectService.project }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.project = SingleProjectService.project;
            }
        });

    }]);
