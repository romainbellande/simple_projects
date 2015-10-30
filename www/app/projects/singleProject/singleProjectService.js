'use strict';
angular.module('app.services').service('SingleProjectService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q, $http, GlobalService, $ionicLoading){
  var singleProjectService = {

    getProject: function(id){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'GET',
        url: GlobalService.baseUrl +  '/project/'+id
      }).then(function successCallback(response){
        q.resolve(response.data);
        console.log(response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    },

    deleteProject: function(id){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'DELETE',
        url: GlobalService.baseUrl +  '/project/'+id
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
  return singleProjectService;

}]);
