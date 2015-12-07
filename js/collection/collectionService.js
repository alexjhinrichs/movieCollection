var app = angular.module('myMovieCollectionApp');

app.service('collectionService', function() {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
    var user = ref.getAuth();
    var movieRef = ref.child('users').child(user.uid);

	this.getMovies = function() {
		return movieRef.child('movies');
		console.log(movieRef.child('movies'));
	};

    this.getTvShows = function() {
        return movieRef.child('tv');
        console.log(movieRef.child('tv'));
    };

});