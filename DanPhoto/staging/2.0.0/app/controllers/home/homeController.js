app.controller('homeController', function ($rootScope) {
    $("#nav-home").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    });

})