var app = angular.module('myMovieCollectionApp');

app.service('loginService', function($firebaseAuth, $firebaseObject, $location, $state, $q) {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
    var userRef = ref.child('users');

    this.authObj = $firebaseAuth(ref);

    var authData = ref.getAuth();

    this.login = function(email, pass) {
        this.authObj.$authWithPassword({
            email: email,
            password: pass
        }).then(function(authData) {
            if (authData) {
                $state.go('search');
                console.log(authData);
                console.log("User " + authData.uid + " is logged in");
                var userId = authData.uid;
                userRef.child(userId).once("value", function(snapshot) {
                    var ifExists = snapshot.exists();
                    if (ifExists) {
                        console.log("User already exists");
                    } else {
                        userRef.child(userId).set({
                            id: userId
                        });
                    }

                });
            }
        }).catch(function(error) {
            alert("Login Failed ", error);
        });
    };

    this.oAuthLogin = function(provider) {
        ref.authWithOAuthPopup(provider, function(error, authData) {
            if (error) {
                console.log(error);
            } else if (authData) {
                console.log("User " + authData.uid + " is logged in with " + authData.provider);
                var userId = authData.uid;
                var name = authData[authData.provider].displayName;
                userRef.child(userId).once("value", function(snapshot) {
                    var ifExists = snapshot.exists();
                    if (ifExists) {
                        console.log("User already exists");
                    } else {
                        userRef.child(userId).set({
                            id: userId,
                            name: name
                        });
                    }
                });
                $state.go('search');
            }
        });
    };
    //.replace(provider + ':', '') - use is you want to get rid of google or facebook on firebase

    this.logout = function() {
        var dfr = $q.defer();
        ref.unauth();
        // location.reload();
        isLoggedIn = false;
        $state.go('login');
        dfr.resolve();
        return dfr.promise;
    };

});