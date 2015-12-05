var app = angular.module('myMovieCollectionApp');

app.service('mainService', function($http, $q) {


    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
    var user = ref.getAuth();

    var movieRef = ref.child('users').child(user.uid).child('movies');

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
        console.log(movie);
        movieRef.push({
            movieArt: "http://image.tmdb.org/t/p/w500" + movie.poster_path,
            movieTitle: movie.original_title,
            releaseDate: movie.release_date,
            description: movie.overview,
            type: movie.media_type
        });
    };
});