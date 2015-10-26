'use strict';
angular.module('app.services').service('CreateTaskService',[ '$q', '$http','GlobalService',
function($q,$http,GlobalService){
  var createTaskService = {

    createTask : function(task, projectId){
      var q = $q.defer();
      $http({
        method: 'POST',
        url: GlobalService.baseUrl + '/task',
        params: {
          task_name: task.name,
          task_description: task.description,
          task_projectid: projectId
        }
      }).then(function successCallback(response){
        q.resolve(response.data);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    }


  };
  return createTaskService;
}]);
