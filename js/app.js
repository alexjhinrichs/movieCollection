var app = angular.module('myMovieCollectionApp', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('search', {
			url: '/search',
			templateUrl: '/js/search/searchTemplate.html',
			controller: 'searchController'
		})
		.state('movies', {
			url: '/movies',
			templateUrl: '/js/movies/moviesTemplate.html',
			controller: 'moviesController'
		})
		.state('tvShows', {
			url: '/tvshows',
			templateUrl: '/js/tv/tvTemplate.html',
			controller: 'tvController'
		})
		.state('overview', {
			url: '/overview',
			templateUrl: '/js/overview/overviewTemplate.html',
			controller: 'overviewController'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/js/login/loginTemplate.html',
			controller: 'authenticationController'
		});


});