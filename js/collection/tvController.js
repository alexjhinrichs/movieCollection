var app = angular.module('myMovieCollectionApp');

app.controller('tvController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService', 'collectionService', 'data',
    function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService, collectionService, data) {

        var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
        var user = ref.getAuth();
        var movieRef = ref.child('users').child(user.uid);

        $scope.gridOptionsTvShows = {
            onRegisterApi: function(gridApi){
                $scope.gridApi = gridApi;
                $scope.gridApi.grid.registerRowsProcessor( $scope.singleFilter, 200 );
                gridApi.selection.on.rowSelectionChanged($scope,function(row){
                });
            },
            enableSorting: true,
            enableGridMenu: true,
            data: data,
            enableRowSelection: true,
            enableFiltering: false,
            enableRowHeaderSelection: false,
            multiSelect: false,
            enableSelectionBatchEvent: false,
            rowHeight: 115,
            minRowsToShow: data.length,
            columnDefs: [{
                name: 'art',
                cellTemplate: "<img ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",
                width: 75,
                enableColumnResizing: true,
                enableSorting: false
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
        
        $scope.deleteSelection = function(){
          angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
            var key = $scope.gridOptionsTvShows.data[$scope.gridOptionsTvShows.data.lastIndexOf(data)].$id;
            movieRef.child('tv').child(key).remove();
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
              [ 'tvTitle' ].forEach(function( field ){
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

        $scope.tvCount = data.length;
    }
]);