var app = angular.module('myMovieCollectionApp');

app.controller('searchController', ['$scope', '$firebaseAuth', 'currentAuth', 'mainService',
    function($scope, $firebaseAuth, currentAuth, mainService) {


        $scope.findMovies = function(searchValue) {
            mainService.findMovies($scope.searchValue).then(function(result) {
                console.log(result);
                $scope.movieData = result.data.results;
            });
        };

    }
]);