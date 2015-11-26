var app = angular.module('myMovieCollectionApp');

app.controller('loginController', ['$scope', '$firebaseAuth', '$firebaseObject', 'loginService', 'registerService', '$rootScope',
    function($scope, $firebaseAuth, $firebaseObj, loginService, registerService, $rootScope) {

        $scope.login = function(email, pass) {
            loginService.login(email, pass);
            $rootScope.authData = true;
        };

        $scope.signUp = function(name, email, pass) {
            registerService.signUp(name, email, pass);
        };

        $scope.googleLogin = function() {
            loginService.googleLogin();
            $rootScope.authData = true;
        };

        $scope.facebookLogin = function() {
            loginService.facebookLogin();
            $rootScope.authData = true;
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