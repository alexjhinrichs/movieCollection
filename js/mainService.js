var app = angular.module('myMovieCollectionApp');

app.service('mainService', function($http, $q) {


    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
    var user = ref.getAuth();

    var movieRef = ref.child('users').child(user.uid);

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
        if (movie.media_type === "movie") {
            alert("This movie was added to your collection: " + movie.original_title);
            movieRef.child('movies').push({
                art: "http://image.tmdb.org/t/p/w500" + movie.poster_path,
                movieTitle: movie.original_title,
                released: movie.release_date,
                description: movie.overview,
                type: movie.media_type
            });
        } else if (movie.media_type === "tv") {
            alert("This TV show was added to your collection: " + movie.name);
            movieRef.child('tv').push({
                art: "http://image.tmdb.org/t/p/w500" + movie.poster_path,
                tvTitle: movie.name,
                airDate: movie.first_air_date,
                description: movie.overview,
                type: movie.media_type
            });
        }
    };
});