var app = angular.module('myMovieCollectionApp');

app.service('registerService', function($firebaseArray, $firebaseAuth, $location, loginService) {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");

    this.signUp = function(name, email, pass) {
        if (name && email && pass) {
            ref.createUser({
                name: name,
                email: email,
                password: pass
            }, function(error, userData) {
                if (error) {
                    alert(error);
                } else {
                    alert("Successfully created user account");
                    loginService.login(email, pass);
                }
            });
        }
    };


});