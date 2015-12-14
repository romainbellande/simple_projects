'use strict';
angular.module('app.services').service('LoginService',[
  '$q', '$http', 'GlobalService', '$ionicLoading',
  function($q,$http,GlobalService, $ionicLoading){
    //var baseUrl = "http://ec2-52-30-32-89.eu-west-1.compute.amazonaws.com:3000";
    var loginService = {

      connectUser : function(user){
        var q = $q.defer();
        $ionicLoading.show({
          template: 'loading...'
        });

          $http({
            method: 'GET',
            url: GlobalService.baseUrl +  '/user/'+user.name+'/'+user.password
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
    return loginService;
  }]);
