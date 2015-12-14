'use strict';
angular.module('app.services').service('CreateProjectService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q, $http, GlobalService, $ionicLoading){
  var createProjectService = {

    createProject : function(project){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'POST',
        url: GlobalService.baseUrl + '/project',
        params: {
          project_name: project.name,
          project_customer: project.customer,
          project_description: project.description,
          project_ownerid: GlobalService.$storage.user._id
        }
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
  return createProjectService;
}]);
