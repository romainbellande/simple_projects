'use strict';
angular.module('app.services').service('PortalService',[
  '$q', '$http', 'GlobalService', '$ionicLoading',
  function($q,$http,GlobalService, $ionicLoading){
    //var baseUrl = "http://ec2-52-30-32-89.eu-west-1.compute.amazonaws.com:3000";
    var portalService = {

      getUser : function(userId){
        var q = $q.defer();
        $ionicLoading.show({
          template: 'loading...'
        });
        $http({
          method: 'GET',
          url: GlobalService.baseUrl +  '/user/'+userId
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
    return portalService;
  }]);
