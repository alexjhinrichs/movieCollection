var app = angular.module('myMovieCollectionApp', ['ui.router', 'firebase', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.saveState', 'ui.grid.moveColumns']);

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
                currentAuth: ["auth",
                    function(auth) {
                        return auth.$requireAuth();
                    }
                ]
            }
        })
        .state('movies', {
            url: '/movies',
            templateUrl: '/js/collection/moviesTemplate.html',
            controller: 'moviesController',
            resolve: {
                currentAuth: ["auth",
                    function(auth) {
                        return auth.$requireAuth();
                    }
                ],
                data: ["collectionService",
                    function(collectionService) {
                        return collectionService.getMovies();a
                    }
                ]
            }
        })
        .state('tv', {
            url: '/tv',
            templateUrl: '/js/collection/tvTemplate.html',
            controller: 'tvController',
            resolve: {
                currentAuth: ["auth",
                    function(auth) {
                        return auth.$requireAuth();
                    }
                ],
                data: ["collectionService",
                    function(collectionService) {
                        return collectionService.getTvShows();
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