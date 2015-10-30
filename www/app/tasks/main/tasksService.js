'use strict';
angular.module('app.services').service('TasksService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q, $http, GlobalService, $ionicLoading){
  var tasksService = {

    tasks: new Array(),

    getTasks: function(projectId){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'GET',
        url: GlobalService.baseUrl +  '/task/project/'+projectId
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

    deleteTask: function(id){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'DELETE',
        url: GlobalService.baseUrl +  '/task/'+id
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
  return tasksService;

}]);