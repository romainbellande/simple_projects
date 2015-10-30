'use strict';
angular.module('app.services').service('CreateAccountService',[
  '$q', '$http','GlobalService', '$ionicLoading',
function($q, $http, GlobalService, $ionicLoading){
  //var baseUrl = "http://ec2-52-30-32-89.eu-west-1.compute.amazonaws.com:3000";
  var userService = {

    createUser : function(user){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'POST',
        url: GlobalService.baseUrl + '/user',
        params: {
          user_name: user.name,
          user_mail: user.mail,
          user_password: user.password
        }
      }).then(function successCallback(response){
        q.resolve(response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    },

    testUserName : function(user){
      var q = $q.defer();
      $ionicLoading.show({
        template: 'loading...'
      });
      $http({
        method: 'GET',
        url: GlobalService.baseUrl + '/user/name/'+user.name
      }).then(function successCallback(response){
        q.resolve(response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    },

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
        console.log(response);
        $ionicLoading.hide();
      },function errorCallback(response){
        q.reject(response);
        $ionicLoading.hide();
      });
      return q.promise;
    }


  };
  return userService;
}]);
