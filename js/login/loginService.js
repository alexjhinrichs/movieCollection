var app = angular.module('myMovieCollectionApp');

app.service('loginService', function($firebaseAuth, $firebaseObject, $location, $state, $q) {

    var ref = new Firebase("https://mymoviecollection.firebaseio.com/");
    var userRef = ref.child('users');

    this.authObj = $firebaseAuth(ref);

    this.login = function(email, name, pass) {
        this.authObj.$authWithPassword({
            email: email,
            password: pass
        }).then(function(authData) {
            if (authData) {
                $state.go('search');
                var userId = authData.uid;
                userRef.child(userId).once("value", function(snapshot) {
                    var ifExists = snapshot.exists();
                    if (ifExists) {
                    } else {
                        userRef.child(userId).set({
                            id: userId,
                            email: email,
                            name: name
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
                alert(error);
            } else if (authData) {
                var userId = authData.uid;
                var name = authData[authData.provider].displayName;
                userRef.child(userId).once("value", function(snapshot) {
                    var ifExists = snapshot.exists();
                    if (ifExists) {
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
        isLoggedIn = false;
        if($state.is('login')) {
            location.reload();
        }
        dfr.resolve();
        $state.go('login');
        return dfr.promise;
    };

});