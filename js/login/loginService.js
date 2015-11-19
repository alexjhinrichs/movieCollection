var app = angular.module('myMovieCollectionApp');

app.service('loginService', function($firebaseAuth, $location) {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");

    this.authObj = $firebaseAuth(ref);

    this.login = function(email, pass) {
        this.authObj.$authWithPassword({
            email: email,
            password: pass
        }).then(function(authData) {
            if(authData) {
                $location.path('/search');
                console.log(authData);
            }
        }).catch(function(error) {
            alert("Login Failed ", error);
        });
    };

    this.logout = function() {
        ref.unauth();
        $location.path('/login');
    };

});