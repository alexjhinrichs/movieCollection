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
            url: "https://api.themoviedb.org/3/search/multi?api_key=" + movieDbKey + "&query=" + searchValue
        }).then(function(result) {
            dfr.resolve(result);
        });
        return dfr.promise;

    };

    this.addMovie = function(movie) {
        if (movie.media_type === "movie") {
            BootstrapDialog.show({
            title: "Congratulations!!!",
            message: movie.original_title + ' was added to your movies collection',
            buttons: [{
                icon: 'glyphicon glyphicon-check',       
                label: 'OK',
                cssClass: 'btn-primary', 
                autospin: false,
                action: function(dialogRef){    
                    dialogRef.close();
                  }
              }]
          });
            movieRef.child('movies').push({
                art: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                movieTitle: movie.original_title,
                released: movie.release_date,
                description: movie.overview,
                type: movie.media_type
            });
        } else if (movie.media_type === "tv") {
            BootstrapDialog.show({
            title: "Congratulations!!!",
            message: movie.name + ' was added to your TV collection',
            buttons: [{
                icon: 'glyphicon glyphicon-check',       
                label: 'OK',
                cssClass: 'btn-primary', 
                autospin: false,
                action: function(dialogRef){    
                    dialogRef.close();
                  }
              }]
          });
            movieRef.child('tv').push({
                art: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                tvTitle: movie.name,
                airDate: movie.first_air_date,
                description: movie.overview,
                type: movie.media_type
            });
        }
    };
});