var app = angular.module('myMovieCollectionApp', ['ui.router', 'firebase']);

app.factory("auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://mymoviecollection.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: '/js/search/searchTemplate.html',
            controller: 'searchController',
            resolve: {
                "currentAuth": ["auth",
                    function(auth) {
                        return auth.$requireAuth();
                    }
                ]
            }
        })
        .state('movies', {
            url: '/movies',
            templateUrl: '/js/movies/moviesTemplate.html',
            controller: 'moviesController',
            resolve: {
                "currentAuth": ["auth",
                    function(auth) {
                        return auth.$requireAuth();
                    }
                ]
            }
        })
        .state('tvShows', {
            url: '/tvshows',
            templateUrl: '/js/tv/tvTemplate.html',
            controller: 'tvController',
            resolve: {
                "currentAuth": ["auth",
                    function(auth) {
                        return auth.$requireAuth();
                    }
                ]
            }
        })
        .state('overview', {
            url: '/overview',
            templateUrl: '/js/overview/overviewTemplate.html',
            controller: 'overviewController',
            resolve: {
                "currentAuth": ["auth",
                    function(auth) {
                        return auth.$requireAuth();
                    }
                ]
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: '/js/login/loginTemplate.html',
            controller: 'loginController'
        });


});