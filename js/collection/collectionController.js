var app = angular.module('myMovieCollectionApp');

app.controller('collectionController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService', 'collectionService',
        function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService, collectionService) {

            // $scope.movieData = [{
            //     "Title": "movie",
            //     "Description": "movie description"
            // }];

            // $scope.tvShowData = [{
            //     "Title": "TV Show",
            //     "Description": "Show description"
            // }];

            // $scope.addMovie = function() {
            //     $scope.addMovie = collectionService.addMovie();
            // }

            // $scope.addData = function() {
            //     var n = $scope.gridOptions.data.length + 1;
            //     $scope.gridOptions.data.push({
            //         "movieArt": "New " + n,
            //         "title": "Person " + n,
            //         "releaseDate": "abc",
            //         "description": 'description'
            //     });
            // };

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
            $scope.getMovies = collectionService.getMovies();
            $scope.gridOptions = {
                enableSorting: true,
                enableFiltering: true,
                enableGridMenu: true,
                data: $firebaseArray($scope.getMovies),
                enableRowSelection: true,
                enableRowHeaderSelection: false,
                multiSelect: false,
                columnDefs: [{
                        name: 'movieArt',
                        cellTemplate: "<img ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",
                        width: 300,
                        enableColumnResizing: true
                    }, {
                        name: 'movieTitle',
                        width: 120,
                        minWidth: 120,
                        enableColumnResizing: true,
                        enableFiltering: false
                    }, {
                        name: 'releaseDate',
                        width: '15%',
                        enableColumnResizing: true
                    }, {
                        name: 'description',
                        minWidth: 50,
                        width: 65,
                        enableColumnResizing: true
                    }]
                };


                }]);