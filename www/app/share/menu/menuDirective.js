angular.module('app.directives').directive('mainMenu', function() {
  return{
    restrict: 'E',
    scope: {},
    templateUrl: 'app/share/menu/menuDirectiveTpl.html',
    controller: ['$scope', '$ionicPopover', 'GlobalService', '$location',
    function($scope, $ionicPopover, GlobalService, $location) {
      $ionicPopover.fromTemplateUrl('app/share/menu/menuTpl.html', {
          scope: $scope,
        }).then(function(menu) {
          $scope.menu = menu;
        });
        $scope.logout = function(){
          delete GlobalService.$storage.user;          
          $location.path("/portal/login");
        };
    }]
  };
});
