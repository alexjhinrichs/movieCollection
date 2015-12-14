var app = angular.module('myMovieCollectionApp');

app.controller('moviesController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService', 'collectionService', 'data',
    function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService, collectionService, data) {

        var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
        var user = ref.getAuth();
        var movieRef = ref.child('users').child(user.uid);

        $scope.gridOptionsMovies = {
            onRegisterApi: function(gridApi){
                $scope.gridApi = gridApi;
            $scope.gridApi.grid.registerRowsProcessor( $scope.singleFilter, 200 );
            gridApi.selection.on.rowSelectionChanged($scope,function(row){
          });
            },
            enableSorting: true,
            enableGridMenu: true,
            flatEntityAccess: true,
            data: data,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            enableFiltering: false,
            multiSelect: false,
            rowHeight: 115,
            enableSelectionBatchEvent: false,
            minRowsToShow: data.length,
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

        $scope.deleteSelection = function(){
          angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
            var key = $scope.gridOptionsMovies.data[$scope.gridOptionsMovies.data.lastIndexOf(data)].$id;
            movieRef.child('movies').child(key).remove();
          });
        };

        $scope.filter = function() {
            $scope.gridApi.grid.refresh().then(function() {
                $scope.filterValue = '';
            });
        };

        $scope.singleFilter = function( renderableRows ){
            var matcher = new RegExp($scope.filterValue);
            renderableRows.forEach( function( row ) {
              var match = false;
              [ 'movieTitle' ].forEach(function( field ){
                if ( row.entity[field].match(matcher) ){
                  match = true;
                }
              });
              if ( !match ){
                row.visible = false;
              }
            });
            return renderableRows;
        };

        $scope.movieCount = data.length;
    }
]);