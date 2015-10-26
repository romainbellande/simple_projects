'use strict';
angular.module('app.services').service('GlobalService',[
  '$localStorage', '$sessionStorage', '$ionicPopup', '$timeout', '$location',
function($localStorage, $sessionStorage, $ionicPopup, $timeout, $location){
  var globalService = {
    //baseUrl : "http://ec2-52-30-32-89.eu-west-1.compute.amazonaws.com:3000",
    baseUrl : "http://localhost:3000",
    $storage : $localStorage.$default({
        user: new Array()
    }),
    showPopup1: function(title, path, scope){
      var myPopup = $ionicPopup.show({
        title: title,
        scope: scope
      });
      myPopup.then(function(res) {
      });
      $timeout(function() {
        myPopup.close(); //close the popup after 3 seconds for some reason
        $location.path(path);
      }, 1000);
    }

  };
  return globalService;
}]);
