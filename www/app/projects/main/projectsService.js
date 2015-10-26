'use strict';
angular.module('app.services').service('ProjectsService',[ '$q', '$http','GlobalService',
function($q,$http,GlobalService){
  var projectsService = {

    projects: new Array(),

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

    getProjects: function(){
      console.log(GlobalService.$storage.user._id);
      var q = $q.defer();
      $http({
        method: 'GET',
        url: GlobalService.baseUrl +  '/project/owner/'+GlobalService.$storage.user._id
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
  return projectsService;

}]);
