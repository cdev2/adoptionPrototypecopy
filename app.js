angular.module("app",["ui.router"]).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
    .state("adoptUs", {
        url: '/adoptUs',
        templateUrl: "./templates/adoptUs.html",
        controller: "adoptUsCtrl"
    })
    .state("home", {
        url: '/',
        templateUrl: "./templates/home.html"
    })



});