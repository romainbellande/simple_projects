'use strict';
angular.module('app.services').service('GlobalService',['$localStorage', '$sessionStorage',
function($localStorage, $sessionStorage){
  var globalService = {
    baseUrl : "http://localhost:3000",
    $storage : $localStorage.$default({
        userId: null
    })
    //baseUrl : "http://ec2-52-30-32-89.eu-west-1.compute.amazonaws.com:3000"
  };
  return globalService;
}]);
