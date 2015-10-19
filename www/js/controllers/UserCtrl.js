angular.module('app.controllers').controller('UserCtrl', [ '$rootScope', '$scope', '$location', 'UserService',
function($rootScope, $scope, $location, UserService) {
  // Get a reference to the Firebase
  // TODO: Replace "ionic-demo" below with the name of your own Firebase
/* ------ CREATE USER ------ */
$scope.connectedUser = {
  id : null
};

  $scope.createUser = function(user){
    console.log(user);

    UserService.testUserName(user).then(function(success){
      console.log(success);
      if(success.data == "non-existent"){
        UserService.createUser(user).then(function(success){
          console.log(success);
        },function(error){
          console.log(error);
        });
      }
      else{
        console.log('Ce nom existe déjà !');
      }

    },function(error){
      console.log(error);
    });
  };

  $scope.connectUser = function(user){
    UserService.connectUser(user).then(function(success){
      $scope.connectedUser.id = success._id;
      console.log("userid: "+success._id);
      $scope.login_info = "Authentication successfull !";
      $location.path('/home');
    },function(error){
      $scope.login_info = "Authentication failed !";
    });
  };



}]);
