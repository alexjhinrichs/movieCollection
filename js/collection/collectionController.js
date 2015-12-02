var app = angular.module('myMovieCollectionApp');

app.controller('collectionController', ['$scope', '$firebaseAuth', 'currentAuth',
        function($scope, $firebaseAuth, currentAuth) {

            $scope.movieData = [{
                "Title": "movie",
                "Description": "movie description"
            }];

            $scope.tvShowData = [{
                "Title": "TV Show",
                "Description": "Show description"
            }];

            // $scope.addData = function() {
            //     var n = $scope.gridOptions.data.length + 1;
            //     $scope.gridOptions.data.push({
            //         "movieArt": "New " + n,
            //         "title": "Person " + n,
            //         "releaseDate": "abc",
            //         "description": 'description'
            //     });
            // };

            // var movieColumnDefinitions = [{
            //     name: 'movieArt'
            // }, {
            //     name: 'title'
            // }, {
            //     name: 'releaseDate'
            // }, {
            //     name: 'description'
            // }];

            // var movieData = [{
            //         "movieArt": "Cox",
            //         "title": "Carney",
            //         "releaseDate": "Enormo",
            //         "description": "description"
            //     }

            // $scope.gridOptions = {
            //     columnDefinitions: movieColumnDefinitions,
            //     data: movieData
            // };

}]);