var app = angular.module("RoarFilmes", ["ngRoute"]);

app.config(function($routeProvider){
   $routeProvider
    .when('/',{
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    })
    .when('/portifolio',{
        templateUrl: 'app/views/portifolio/portifolio.html',
        controller: 'portifolioController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});