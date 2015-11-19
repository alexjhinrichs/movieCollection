var app = angular.module('myMovieCollectionApp');

app.service('loginService', function($firebaseAuth, $location, $state) {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");

    this.authObj = $firebaseAuth(ref);

    this.login = function(email, pass) {
        this.authObj.$authWithPassword({
            email: email,
            password: pass
        }).then(function(authData) {
            if (authData) {
                $location.path('/search');
                console.log(authData);
            }
        }).catch(function(error) {
            alert("Login Failed ", error);
        });
    };

    this.googleLogin = function() {
        ref.authWithOAuthPopup("google", function(error, authData) {
            if (error) {
                console.log(error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $state.go('search');
            }
        });
    };

    this.facebookLogin = function() {
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $state.go('search');
            }
        });
    }

    this.logout = function() {
        ref.unauth();
        $location.path('/login');
    };

});