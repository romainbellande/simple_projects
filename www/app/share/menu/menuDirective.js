angular.module('app.directives').directive('mainMenu', function() {
  return{
    restrict: 'E',
    scope: {},
    templateUrl: 'app/share/menu/menuDirectiveTpl.html',
    controller: ['$scope', '$ionicPopover', function($scope, $ionicPopover) {
      $ionicPopover.fromTemplateUrl('app/share/menu/menuTpl.html', {
          scope: $scope,
        }).then(function(menu) {
          $scope.menu = menu;
        });
    }]
  };
});
