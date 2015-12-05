var app = angular.module('myMovieCollectionApp');

app.controller('mainController', ['$scope', '$firebaseObject', '$firebaseArray', '$firebaseAuth', 'loginService',
    function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, loginService) {

   		$scope.logout = function() {
        loginService.logout();
        };


    }
]);