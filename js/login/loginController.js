var app = angular.module('myMovieCollectionApp');

app.controller('loginController', ['$scope', '$firebaseAuth', '$firebaseObject', 'loginService', 'registerService',
    function($scope, $firebaseAuth, $firebaseObject, loginService, registerService) {

        var ref = new Firebase("https://mymoviecollection.firebaseio.com/");

        $scope.login = function(email, pass) {
            loginService.login(email, pass);
        };

        $scope.signUp = function(name, email, pass) {
            registerService.signUp(name, email, pass);
        };

        $scope.oAuthLogin = function(provider) {
            loginService.oAuthLogin(provider);
        };


        $scope.status = 'Register';
        $scope.showReg = function() {
            if ($scope.status === 'Register') {
                $scope.status = 'Login';
            } else {
                $scope.status = 'Register';
            }
            $scope.reg = !$scope.reg;
        };

    }
]);