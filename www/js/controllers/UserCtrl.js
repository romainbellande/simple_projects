angular.module('app.controllers').controller('UserCtrl', [ '$rootScope', '$scope', 'UserService',
function($rootScope, $scope, UserService) {
  // Get a reference to the Firebase
  // TODO: Replace "ionic-demo" below with the name of your own Firebase
/* ------ CREATE USER ------ */
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



}]);
