'use strict';
angular.module('app.services').service('UserService',[ '$q', '$http',
function($q,$http){
  var userService = {

    createUser : function(user){
      var q = $q.defer();
      $http({
        method: 'POST',
        url: 'http://localhost:3000/user',
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
        url: 'http://localhost:3000/user/name/'+user.name
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
        method: 'POST',
        url: 'http://localhost:3000/users/connectuser',
        params: {
          username: user.name,
          userpassword: user.password
        }
      }).then(function successCallback(response){
        q.resolve(response);
      },function errorCallback(response){
        q.reject(response);
      });
      return q.promise;
    }


  };
  return userService;
}]);
