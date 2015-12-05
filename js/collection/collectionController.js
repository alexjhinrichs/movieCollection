var app = angular.module('myMovieCollectionApp');

app.controller('collectionController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService',
        function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService) {

            $scope.movieData = [{
                "Title": "movie",
                "Description": "movie description"
            }];

            $scope.tvShowData = [{
                "Title": "TV Show",
                "Description": "Show description"
            }];

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

            // $scope.gridOptions = {
            //     enableSorting: true,
            //     enableFiltering: true,
            //     enableGridMenu: true,
            //     data: $firebaseArray($scope.getMovies),
            //     enableRowSelection: true,
            //     enableRowHeaderSelection: false,
            //     multiSelect: false,
            //     rowTemplate: "<div ng-click='grid.appScope.viewCustomer(row)' ng-repeat='(colRenderIndex, col) in colContainer.renderedColumns track by col.uid' class='ui-grid-cell' ng-class='col.colIndex()' ui-grid-cell></div>",
            //     columnDefs: [{
            //             name: 'movieArt',
            //             minWidth: 110,
            //             width: 110,
            //             enableColumnResizing: true
            //         }, {
            //             name: 'title',
            //             width: 120,
            //             minWidth: 120,
            //             enableColumnResizing: true,
            //             enableFiltering: false
            //         }, {
            //             name: 'releaseDate',
            //             width: '15%',
            //             enableColumnResizing: true
            //         }, {
            //             name: 'description',
            //             minWidth: 50,
            //             width: 65,
            //             enableColumnResizing: true
            //         }]
            //     };


                }]);