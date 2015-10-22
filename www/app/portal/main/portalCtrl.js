angular.module('app.controllers').controller('PortalCtrl', [
  '$rootScope', '$scope', '$location', 'PortalService', '$ionicPopup', '$timeout', 'GlobalService',
  function($rootScope, $scope, $location, PortalService, $ionicPopup, $timeout, GlobalService) {
    // Get a reference to the Firebase
    // TODO: Replace "ionic-demo" below with the name of your own Firebase
    /* ------ CREATE USER ------ */

    /* ------ POPUP ------ */
    $scope.showPopup = function(){
      var myPopup = $ionicPopup.show({
        title: 'Connexion successfull !',
        scope: $scope
      });
      myPopup.then(function(res) {
      });
      $timeout(function() {
        myPopup.close(); //close the popup after 3 seconds for some reason
        $location.path('/projects');
      }, 1000);
    }
    /* ------ GET USER ------ */

    function getUser(){
      console.log("userId stored: "+GlobalService.$storage.userId);
      if(GlobalService.$storage.userId != null){
        $scope.userExist = true;
        PortalService.getUser(GlobalService.$storage.userId).then(function(success){
          $scope.showPopup();
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
