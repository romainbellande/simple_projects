angular.module('app.controllers').controller('EditResourceCtrl', [
    '$rootScope', '$scope', '$location', '$stateParams', 'SingleResourceService', '$ionicPopover', 'EditResourceService', 'ResourcesService', 'GlobalService', 'ProjectsService', 'SingleProjectService',
    function($rootScope, $scope, $location, $stateParams, SingleResourceService, $ionicPopover, EditResourceService, ResourcesService, GlobalService, ProjectsService, SingleProjectService) {



        $scope.editResource = function(resource){


            EditResourceService.editResource($stateParams.projectId,$stateParams.resourceId,resource)
            .then(function(success){
                ResourcesService.resources[SingleResourceService.index] = success;
                GlobalService.showPopup1("Resource edited successfully !",'/resources/'+$stateParams.projectId+'/'+$stateParams.resourceId+'/-1/single-resource',$scope);
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
        $scope.$watch(function () { return ResourcesService.resources[SingleResourceService.index] }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.resource = ResourcesService.resources[SingleResourceService.index];
            }
        });

    }]);
