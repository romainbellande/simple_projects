angular.module('app.controllers').controller('TasksCtrl', [ '$rootScope', '$scope', '$location',
function($rootScope, $scope, $location) {
  $scope.tasks = [
{
  title: "Analyse du projet"
},
{
  title:"Wireframes"
}
  ];

}]);
