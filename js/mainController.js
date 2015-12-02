var app = angular.module('myMovieCollectionApp');

app.controller('mainController', ['$scope', '$firebaseObject', '$firebaseArray', '$firebaseAuth', 'loginService',
    function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, loginService) {

   		$scope.checkAuth = loginService.isAuthed;

   		console.log($scope.checkAuth);

   		$scope.logout = function() {
            loginService.logout()
            	.then(function(){
            		$scope.checkAuth = loginService.checkAuth();
            	})
        };


    }
]);