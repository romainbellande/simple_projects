angular.module('app.controllers').controller('PortalCtrl', [
  '$rootScope', '$scope', '$location', 'PortalService', '$ionicPopup', '$timeout', 'GlobalService',
  function($rootScope, $scope, $location, PortalService, $ionicPopup, $timeout, GlobalService) {
    // Get a reference to the Firebase
    // TODO: Replace "ionic-demo" below with the name of your own Firebase
    /* ------ CREATE USER ------ */


    /* ------ GET USER ------ */

    function getUser(){
      console.log("userId stored: "+GlobalService.$storage.user._id);
      if(typeof GlobalService.$storage.user._id != "undefined"){
        $scope.userExist = true;
        PortalService.getUser(GlobalService.$storage.user._id).then(function(success){
          GlobalService.showPopup1("Authenticated successfully", '/projects', $scope);
        },function(error){
          $scope.login_info = "Query failed !";
        });
      }
      else{
        $scope.userExist = false;
      }
    }


    getUser();

  }]);
