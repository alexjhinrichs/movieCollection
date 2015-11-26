var app = angular.module('myMovieCollectionApp');

app.controller('collectionController', ['$scope', '$firebaseAuth', 'currentAuth',
        function($scope, $firebaseAuth, currentAuth) {

            $scope.movieData = [
            	{
                "Title": "movie",
                "Description": "movie description"
            	}
            ];

            $scope.tvShowData = [
            	{
                "Title": "TV Show",
                "Description": "Show description"
            	}
            ];

	}]);