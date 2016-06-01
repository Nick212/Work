app.controller('homeController', function ($rootScope, $scope) {

    showStep = function (step) {
        //alert('Step: ' + step);
        $scope.nutriStep1 = { show: true };
    }

    onload = function () {
        showStep(1);
    }

})