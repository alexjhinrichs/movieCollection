var app = angular.module('myMovieCollectionApp', ['ui.router', 'firebase', 'ngMaterial', 'ngAnimate', 'ngAria', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.selection']);

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
        .state('collection', {
            url: '/collection',
            templateUrl: '/js/collection/collectionTemplate.html',
            controller: 'collectionController',
            resolve: {
                currentAuth: ["auth",
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
            currentAuth: ["auth",
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

    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('darkTheme')
            .primaryPalette('grey', {
                'default': '600', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '400', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': '900' // use shade A100 for the <code>md-hue-3</code> class
            })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('blue', {
            'default': '900' // use shade 200 for default, and keep all other shades the same
        });
    });