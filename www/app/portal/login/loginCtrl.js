angular.module('app.controllers').controller('LoginCtrl', [
  '$rootScope', '$scope', '$location', 'LoginService', '$ionicPopup', '$timeout', 'GlobalService',
  function($rootScope, $scope, $location, LoginService, $ionicPopup, $timeout, GlobalService) {
    // Get a reference to the Firebase
    // TODO: Replace "ionic-demo" below with the name of your own Firebase
    /* ------ CREATE USER ------ */




    /* ------ CONNECT USER & REDIRECT ------ */
    var isDisabled = false;
    $scope.connectUser = function(user){
      if(user){
        if(!isDisabled){
          isDisabled = true;
          LoginService.connectUser(user).then(function(success){
            if(typeof success._id !="undefined"){
              console.log("userid: "+success._id);
              GlobalService.$storage.user = success;
              GlobalService.showPopup1("Hello "+success.name+" !",'projects',$scope);
            }
            else{
              GlobalService.showPopup1("Wrong credentials !",'/portal/login',$scope);

            }
            isDisabled = false;
          },function(error){
            isDisabled = false;
          });
        }
      }

    };

  }]);
