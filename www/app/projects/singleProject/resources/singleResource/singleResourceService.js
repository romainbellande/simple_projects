'use strict';
angular.module('app.services').service('SingleResourceService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q,$http,GlobalService, $ionicLoading){
  var singleResourceService = {
     index: null,
     resource: null,
    getResource: function(projectId, id){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'GET',
        url: GlobalService.baseUrl +  '/project/'+projectId+'/resource/'+id
      }).then(function successCallback(response){
        q.resolve(response.data);
        console.log("my resource: ",response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    },

    deleteResource: function(projectId, id){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'DELETE',
        url: GlobalService.baseUrl + '/project/'+projectId+'/resource/'+id
      }).then(function successCallback(response){
        q.resolve(response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    }


  };
  return singleResourceService;

}]);
