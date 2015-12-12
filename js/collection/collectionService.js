var app = angular.module('myMovieCollectionApp');

app.service('collectionService', function($q, $firebaseArray) {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
    var user = ref.getAuth();
    var movieRef = ref.child('users').child(user.uid);

	this.getMovies = function() {
        var dfr = $q.defer();
        $firebaseArray(movieRef.child('movies'))
        .$loaded().then(function(response) {
            dfr.resolve(response);
        });
        return dfr.promise;
	};

    this.getTvShows = function() {
        var dfr = $q.defer();
        $firebaseArray(movieRef.child('tv'))
        .$loaded().then(function(response) {
            dfr.resolve(response);
        });
        return dfr.promise;
    };

});