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
        templateUrl: "./templates/home.html",
        controller: function () {
            var initialFadeIn = 1000;
			
			//interval between items (in milliseconds)
			var itemInterval = 3000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 2000;
			
			//count number of items
			var numberOfItems = $('.rotating-item').length;

			//set current item
			var currentItem = 0;

			//show first item
			$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}
				$('.rotating-item').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);	
			

        }
    })



});