'use strict';
angular.module('app.services').service('CreateAccountService',[ '$q', '$http',
function($q,$http){
  var baseUrl = "http://localhost:3000";
  //var baseUrl = "http://ec2-52-30-32-89.eu-west-1.compute.amazonaws.com:3000";
  var userService = {

    createUser : function(user){
      var q = $q.defer();
      $http({
        method: 'POST',
        url: baseUrl + '/user',
        params: {
          username: user.name,
          usermail: user.mail,
          userpassword: user.password
        }
      }).then(function successCallback(response){
        q.resolve(response);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    },

    testUserName : function(user){
      var q = $q.defer();
      $http({
        method: 'GET',
        url: baseUrl + '/user/name/'+user.name
      }).then(function successCallback(response){
        q.resolve(response);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    },

    connectUser : function(user){
      var q = $q.defer();
      $http({
        method: 'GET',
        url: baseUrl +  '/user/'+user.name+'/'+user.password
      }).then(function successCallback(response){
        q.resolve(response.data);
        console.log(response);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    }


  };
  return userService;
}]);
