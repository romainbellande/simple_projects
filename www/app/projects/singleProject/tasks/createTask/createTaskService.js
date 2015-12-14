'use strict';
angular.module('app.services').service('CreateTaskService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q,$http,GlobalService, $ionicLoading){
  var createTaskService = {

    createTask : function(task, projectId){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'POST',
        url: GlobalService.baseUrl + '/project/'+projectId+'/task/',
        params: {
          task_name: task.name,
          task_description: task.description,
          task_resources: task.resources
        }
      }).then(function successCallback(response){
        q.resolve(response.data);

        console.log("task: ", response.data);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    }


  };
  return createTaskService;
}]);
