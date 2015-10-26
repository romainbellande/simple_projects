'use strict';
angular.module('app.services').service('TasksService',[
  '$q', '$http','GlobalService',
function($q,$http,GlobalService){
  var tasksService = {

    tasks: new Array(),

    getTasks: function(projectId){
      var q = $q.defer();
      $http({
        method: 'GET',
        url: GlobalService.baseUrl +  '/task/project/'+projectId
      }).then(function successCallback(response){
        q.resolve(response.data);
        console.log(response);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    },

    deleteTask: function(id){
      var q = $q.defer();
      $http({
        method: 'DELETE',
        url: GlobalService.baseUrl +  '/task/'+id
      }).then(function successCallback(response){
        q.resolve(response.data);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    }


  };
  return tasksService;

}]);
