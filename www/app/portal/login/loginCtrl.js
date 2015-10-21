angular.module('app.controllers').controller('LoginCtrl', [ '$rootScope', '$scope', '$location', 'UserService',
function($rootScope, $scope, $location, UserService) {
  // Get a reference to the Firebase
  // TODO: Replace "ionic-demo" below with the name of your own Firebase
/* ------ CREATE USER ------ */
$scope.connectedUser = {
  id : null
};

  $scope.connectUser = function(user){
    UserService.connectUser(user).then(function(success){
      $scope.connectedUser.id = success._id;
      console.log("userid: "+success._id);
      $scope.login_info = "Authentication successfull !";
      $location.path('/projects');
    },function(error){
      $scope.login_info = "Authentication failed !";
    });
  };

}]);
