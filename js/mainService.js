var app = angular.module('myMovieCollectionApp');

app.service('mainService', function($http, $q) {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");

    var movieDbKey = "6d8a480120db2ae36e07a48452b3e742";

    this.findMovies = function(searchValue) {
        var dfr = $q.defer();
        $http({
            method: 'GET',
            url: "http://api.themoviedb.org/3/search/multi?api_key=" + movieDbKey + "&query=" + searchValue
        }).then(function(result) {
            console.log(result);
            dfr.resolve(result);
        });
        return dfr.promise;
    };

    this.addMovie = function(movie) {

    };

});