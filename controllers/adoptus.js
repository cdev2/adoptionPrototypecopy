angular.module("app").controller("adoptUsCtrl", function($scope, adoptUsService){
    $scope.gallery = adoptUsService.gallery
})