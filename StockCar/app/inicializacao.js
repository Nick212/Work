var app = angular.module("StockCar", ["ngRoute"]);

app.config(function($routeProvider){
   $routeProvider
    .when('/',{
        templateUrl: 'app/views/dashboard/dashboard.html',
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