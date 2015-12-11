var app = angular.module('myMovieCollectionApp');

app.controller('tvController', ['$scope', '$firebaseAuth', 'currentAuth', '$firebaseArray', 'mainService', 'collectionService',
    function($scope, $firebaseAuth, currentAuth, $firebaseArray, mainService, collectionService) {

        $scope.getTvShows = collectionService.getTvShows();

        var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
        var user = ref.getAuth();
        var movieRef = ref.child('users').child(user.uid);

        $scope.gridOptionsTvShows = {
            enableSorting: true,
            enableGridMenu: true,
            data: $firebaseArray($scope.getTvShows),
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            enableSelectionBatchEvent: false,
            rowHeight: 115,
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

        $scope.gridOptionsTvShows.onRegisterApi = function(gridApi){
          $scope.gridApi = gridApi;
          gridApi.selection.on.rowSelectionChanged($scope,function(row){
          });
        };
        
        $scope.deleteSelection = function(){
          angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
            var key = $scope.gridOptionsTvShows.data[$scope.gridOptionsTvShows.data.lastIndexOf(data)].$id;
            movieRef.child('tv').child(key).remove();
          });
        }
    }
]);