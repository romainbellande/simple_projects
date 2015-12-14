'use strict';
angular.module('app.services').service('ResourcesService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q, $http, GlobalService, $ionicLoading){
  var resourcesService = {
    resources: new Array(),

    getResources: function(projectId){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'GET',
        url: GlobalService.baseUrl +  '/project/'+projectId+'/resource/'
      }).then(function successCallback(response){
        q.resolve(response.data);
        console.log("resource: "+response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    }
  };
  return resourcesService;

}]);
