var app = angular.module('myMovieCollectionApp');

app.controller('loginController', ['$scope', '$firebaseAuth', '$firebaseObject', 'loginService',
    function($scope, $firebaseAuth, $firebaseObj, loginService) {

        $scope.login = function(email, pass) {
            loginService.login(email, pass);
        };

        $scope.signUp = function(name, email, pass) {
            loginService.signUp(name, email, pass);
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