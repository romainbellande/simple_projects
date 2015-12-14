'use strict';
angular.module('app.services').service('EditTaskService',[
    '$q', '$http','GlobalService', '$ionicLoading',
    function($q, $http, GlobalService, $ionicLoading){
        var editTaskService = {

            editTask: function(projectId, taskId, task){
                var q = $q.defer();
                $ionicLoading.show({
                    template: 'loading...'
                });
                $http({
                    method: 'PUT',
                    url: GlobalService.baseUrl +  '/project/'+projectId+'/task/'+taskId,
                    params: {
                        task_name:  task.name,
                        task_description:  task.description
                    }
                }).then(function successCallback(response){
                    q.resolve(response.data);
                    $ionicLoading.hide();
                },function errorCallback(response){
                    q.reject(response);
                    $ionicLoading.hide();
                });
                return q.promise;
            }


        };
        return editTaskService;

    }]);
