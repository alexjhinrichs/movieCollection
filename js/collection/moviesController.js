var app = angular.module('myMovieCollectionApp');

app.controller('moviesController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService', 'collectionService',
    function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService, collectionService) {

        var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
        var user = ref.getAuth();
        var movieRef = ref.child('users').child(user.uid);

        $scope.getMovies = collectionService.getMovies();

        $scope.gridOptionsMovies = {
            enableSorting: true,
            enableGridMenu: true,
            data: $firebaseArray($scope.getMovies),
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            enableFiltering: true,
            multiSelect: false,
            rowHeight: 115,
            enableSelectionBatchEvent: false,
            columnDefs: [{
                name: 'art',
                cellTemplate: "<img ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",
                width: 75,
                enableColumnResizing: true,
                enableFiltering: false,
                enableSorting: false
            }, {
                name: 'movieTitle',
                width: 225,
                enableColumnResizing: true,
                enableFiltering: true
            }, {
                name: 'released',
                width: 115,
                enableColumnResizing: true
            }, {
                name: 'description',
                enableColumnResizing: true
            }]
        };

        $scope.gridOptionsMovies.onRegisterApi = function(gridApi){
          $scope.gridApi = gridApi;
          gridApi.selection.on.rowSelectionChanged($scope,function(row){
          });
        };

        $scope.deleteSelection = function(){
          angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
            var key = $scope.gridOptionsMovies.data[$scope.gridOptionsMovies.data.lastIndexOf(data)].$id;
            movieRef.child('movies').child(key).remove();
          });
        };
    }
]);