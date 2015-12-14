'use strict';
angular.module('app.services').service('CreateResourceService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q,$http,GlobalService, $ionicLoading){
  var createResourceService = {

    createResource : function(resource, projectId){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'POST',
        url: GlobalService.baseUrl + '/project/'+projectId+'/resource/',
        params: {
          resource_name: resource.name,
          resource_description: resource.description,
          resource_value: resource.value
        }
      }).then(function successCallback(response){
        q.resolve(response.data);

        console.log("resource: ", response.data);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    }


  };
  return createResourceService;
}]);
