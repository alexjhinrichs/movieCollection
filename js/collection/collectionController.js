var app = angular.module('myMovieCollectionApp');

app.controller('collectionController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService', 'collectionService',
    function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService, collectionService) {

        $scope.getMovies = collectionService.getMovies();
        $scope.getTvShows = collectionService.getTvShows();

        $scope.gridOptionsMovies = {
            enableSorting: true,
            enableGridMenu: true,
            data: $firebaseArray($scope.getMovies),
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            rowHeight: 115,
            columnDefs: [{
                name: 'movieArt',
                cellTemplate: "<img ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",
                width: 75,
                enableColumnResizing: true,
            }, {
                name: 'movieTitle',
                width: 225,
                enableColumnResizing: true,
                enableFiltering: false
            }, {
                name: 'releaseDate',
                width: 115,
                enableColumnResizing: true
            }, {
                name: 'description',
                enableColumnResizing: true
            }]
        };

        $scope.gridOptionsTvShows = {
            enableSorting: true,
            enableGridMenu: true,
            data: $firebaseArray($scope.getTvShows),
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            rowHeight: 115,
            columnDefs: [{
                name: 'tvArt',
                cellTemplate: "<img ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",
                width: 75,
                enableColumnResizing: true
            }, {
                name: 'tvTitle',
                width: 150,
                enableColumnResizing: true,
                enableFiltering: false
            }, {
                name: 'airDate',
                width: 100,
                enableColumnResizing: true
            }, {
                name: 'description',
                enableColumnResizing: true
            }]
        };
    }
]);