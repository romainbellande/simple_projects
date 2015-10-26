'use strict';
angular.module('app.services').service('CreateProjectService',[ '$q', '$http','GlobalService',
function($q,$http,GlobalService){
  var createProjectService = {

    createProject : function(project){
      var q = $q.defer();
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
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    }


  };
  return createProjectService;
}]);
