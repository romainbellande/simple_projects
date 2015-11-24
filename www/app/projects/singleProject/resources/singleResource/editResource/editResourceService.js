'use strict';
angular.module('app.services').service('EditResourceService',[
    '$q', '$http','GlobalService', '$ionicLoading',
    function($q, $http, GlobalService, $ionicLoading){
        var editResourceService = {

            editResource: function(projectId, resourceId, resource){
                var q = $q.defer();
                $ionicLoading.show({
                    template: 'loading...'
                });
                $http({
                    method: 'PUT',
                    url: GlobalService.baseUrl +  '/project/'+projectId+'/resource/'+resourceId,
                    params: {
                        resource_name:  resource.name,
                        resource_description:  resource.description,
                        resource_value : resource.value
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
        return editResourceService;

    }]);
