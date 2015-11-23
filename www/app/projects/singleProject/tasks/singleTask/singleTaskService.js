'use strict';
angular.module('app.services').service('SingleTaskService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q,$http,GlobalService, $ionicLoading){
  var singleTaskService = {
     index: null,
    getTask: function(projectId, id){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'GET',
        url: GlobalService.baseUrl +  '/project/'+projectId+'/task/'+id
      }).then(function successCallback(response){
        q.resolve(response.data);
        console.log("my task: ",response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    },

    deleteTask: function(projectId, id){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'DELETE',
        url: GlobalService.baseUrl + '/project/'+projectId+'/task/'+id
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
  return singleTaskService;

}]);
