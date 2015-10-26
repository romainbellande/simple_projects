'use strict';
angular.module('app.services').service('SingleProjectService',[
  '$q', '$http','GlobalService',
function($q,$http,GlobalService){
  var singleProjectService = {
    
    getProject: function(id){
      var q = $q.defer();
      $http({
        method: 'GET',
        url: GlobalService.baseUrl +  '/project/'+id
      }).then(function successCallback(response){
        q.resolve(response.data);
        console.log(response);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    },

    deleteProject: function(id){
      var q = $q.defer();
      $http({
        method: 'DELETE',
        url: GlobalService.baseUrl +  '/project/'+id
      }).then(function successCallback(response){
        q.resolve(response.data);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    }


  };
  return singleProjectService;

}]);
