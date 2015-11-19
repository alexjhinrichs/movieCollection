var app = angular.module('myMovieCollectionApp');

app.controller('overviewController', ['$scope', '$firebaseAuth', 'currentAuth', function($scope, $firebaseAuth, currentAuth) {

	$scope.authData = true;
	
}]);