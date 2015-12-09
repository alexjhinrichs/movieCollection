var app = angular.module('myMovieCollectionApp');

app.controller('moviesController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService', 'collectionService',
    function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService, collectionService) {

        // var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
        // var movieRef = ref.child('users').child(user.uid);

        $scope.getMovies = collectionService.getMovies();

        // $scope.deleteSelection = function(row) {
        //     $firebaseArray(movieRef.child('movie'))
        // };

        $scope.gridOptionsMovies = {
            enableSorting: true,
            enableGridMenu: true,
            data: $firebaseArray($scope.getMovies),
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            rowHeight: 115,
            // rowTemplate: "<div ng-click='grid.appScope.deleteSelection(row)' ng-repeat='(colRenderIndex, col) in colContainer.renderedColumns track by col.uid' class='ui-grid-cell' ng-class='col.colIndex()' ui-grid-cell></div>",
            columnDefs: [{
                name: 'art',
                cellTemplate: "<img ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",
                width: 75,
                enableColumnResizing: true,
            }, {
                name: 'movieTitle',
                width: 225,
                enableColumnResizing: true,
                enableFiltering: false
            }, {
                name: 'released',
                width: 115,
                enableColumnResizing: true
            }, {
                name: 'description',
                enableColumnResizing: true
            }]
        };
    }
]);