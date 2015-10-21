angular.module('app.controllers').controller('LoginCtrl', [
  '$rootScope', '$scope', '$location', 'LoginService', '$ionicPopup', '$timeout',
function($rootScope, $scope, $location, LoginService, $ionicPopup, $timeout) {
  // Get a reference to the Firebase
  // TODO: Replace "ionic-demo" below with the name of your own Firebase
/* ------ CREATE USER ------ */
$scope.connectedUser = {
  id : null
};
/* ------ POPUP ------ */
$scope.showPopup = function(){
  var myPopup = $ionicPopup.show({
    title: 'Connexion successfull !',
    subTitle: 'you are being redirected',
    scope: $scope
  });
  myPopup.then(function(res) {
  });
  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
     $location.path('/projects');
  }, 1000);
}


/* ------ CONNECT USER & REDIRECT ------ */
  $scope.connectUser = function(user){
    LoginService.connectUser(user).then(function(success){
      $scope.connectedUser.id = success._id;
      console.log("userid: "+success._id);
      $scope.login_info = "Authentication successfull !";
      $scope.showPopup();
    },function(error){
      $scope.login_info = "Authentication failed !";
    });
  };

}]);
