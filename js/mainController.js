var app = angular.module('myMovieCollectionApp');

app.controller('mainController', ['$scope', '$firebaseObject', '$firebaseArray', '$firebaseAuth', 'loginService', '$rootScope',
    function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, loginService, $rootScope) {


   		$scope.logout = function() {
            loginService.logout();
            $rootScope.authData = false;
        };


    }
]);