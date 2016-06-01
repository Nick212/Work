var app = angular.module("Baccio", ["ngRoute"]);

app.config(function($routeProvider){
   $routeProvider
    .when('/',{
        templateUrl: 'app/views/home.html',
        controller: 'homeController'
    })
    .when('/home',{
        templateUrl: 'app/views/home.html',
        controller: 'homeController'
    })
    .when('/produtos',{
        templateUrl: 'app/views/produtos.html',
        controller: 'produtosController'
    })
    .when('/empresa',{
        templateUrl: 'app/views/empresa.html',
        controller: 'empresaController'
    })
    .when('/receitas',{
        templateUrl: 'app/views/receitas.html',
        controller: 'receitasController'
    })
    .when('/contato',{
        templateUrl: 'app/views/contato.html',
        controller: 'contatoController'
    })
    .when('/representantes',{
        templateUrl: 'app/views/representantes.html',
        controller: 'representantesController'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
});