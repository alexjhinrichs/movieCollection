var app = angular.module('myMovieCollectionApp');

app.controller('tvController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService', 'collectionService',
    function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService, collectionService) {


        $scope.getTvShows = collectionService.getTvShows();

        $scope.gridOptionsTvShows = {
            enableSorting: true,
            enableGridMenu: true,
            data: $firebaseArray($scope.getTvShows),
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            rowHeight: 115,
            columnDefs: [{
                name: 'art',
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