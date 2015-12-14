angular.module('app.controllers').controller('CreateTaskCtrl', [
    '$rootScope', '$scope', '$location', '$stateParams', 'CreateTaskService', 'TasksService', 'SingleProjectService', 'GlobalService', 'ResourcesService',
    function($rootScope, $scope, $location, $stateParams, CreateTaskService, TasksService, SingleProjectService, GlobalService, ResourcesService) {
        $scope.add_resource = false;
        SingleProjectService.getProject($stateParams.projectId).then(function(success){
            $scope.project = success;
        });
        var isDisabled = false;
        $scope.selectedResources = new Array();
        $scope.nbResources = 0;
        $scope.range = function(count){

       var ratings = [];

       for (var i = 0; i < count; i++) {
           ratings.push(i)
       }

       return ratings;
   }
        $scope.addResource = function(){
            console.log($scope.selectResource);
            if(typeof $scope.selectResource != 'undefined'){
                $scope.selectedResources.push($scope.selectResource);
            }

        }

        $scope.createTask = function(task){



            if(!isDisabled){
                isDisabled = true;

                task.resources = $scope.savedResources;

                CreateTaskService.createTask(task,$stateParams.projectId).then(function(success){
                    TasksService.tasks.push(success);
                    GlobalService.showPopup1("Task created successfully !",'/tasks/'+$stateParams.projectId,$scope);
                    isDisabled = false;
                },function(error){
                    console.log(error);
                    isDisabled = false;
                });
            }
        };
        $scope.savedResources = new Array();
        $scope.updateSavedResources = function(val){
            if($scope.savedResources.length > val){
                $scope.savedResources.pop();

            }
            else{
                $scope.savedResources.push({
                    id: $scope.resources[$scope.resources.length-1],
                    quantity: 0
                });
            }
            //console.log("savedResources: ",$scope.savedResources);
        }
        $scope.updateResource = function(resource,index){
            $scope.savedResources[index]['id'] = $scope.resources[resource]['_id'];
            console.log("resourceId: ",$scope.savedResources);
        };
        $scope.updateQuantity = function(quantity,index){
            $scope.savedResources[index]['quantity'] = quantity;
            console.log("quantity: ",$scope.savedResources);
        }
        ;

        $scope.$watch(function () { return ResourcesService.resources }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.resources = ResourcesService.resources;
                $scope.totResources = ResourcesService.resources.length;
            }
        });


    }]);
