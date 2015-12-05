var app = angular.module('myMovieCollectionApp');

app.service('collectionService', function() {

	var ref = new Firebase("https://mymoviecollection.firebaseio.com/");

	// this.addMovie = function() {
	// 	return new Firebase(ref + '/collection');
	// };

});