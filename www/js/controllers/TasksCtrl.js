angular.module('app.controllers').controller('TasksCtrl', [ '$rootScope', '$scope', '$location',
function($rootScope, $scope, $location) {
  // Get a reference to the Firebase
  // TODO: Replace "ionic-demo" below with the name of your own Firebase

  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.tasks = [
    {
      title: "Analyse du projet"
    },
  {
    title: "Wireframes"
  }];
  $scope.moveItem = function(item, fromIndex, toIndex) {
      //Move the item in the array
      $scope.tasks.splice(fromIndex, 1);
      $scope.tasks.splice(toIndex, 0, item);
    };

  }]);
