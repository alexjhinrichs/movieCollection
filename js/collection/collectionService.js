var app = angular.module('myMovieCollectionApp');

app.service('collectionService', function() {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
    var user = ref.getAuth();
    var movieRef = ref.child('users').child(user.uid).child('movies');

    // Attach an asynchronous callback to read the data at our posts reference
    // movieRef.on("value", function(snapshot) {
    //     console.log(snapshot.val());
    // }, function(errorObject) {
    //     console.log("The read failed: " + errorObject.code);
    // });
	this.getMovies = function() {
		return movieRef;
		console.log(movieRef)
	}

});