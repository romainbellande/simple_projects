'use strict';
angular.module('app.services').service('EditProjectService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q, $http, GlobalService, $ionicLoading){
  var editProjectService = {

    editProject: function(project,id){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'PUT',
        url: GlobalService.baseUrl +  '/project/'+id,
        params: {
          project_name: project.name,
          project_customer: project.customer,
          project_description: project.description
        }
      }).then(function successCallback(response){
        q.resolve(response.data);
        console.log(response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    }


  };
  return editProjectService;

}]);
