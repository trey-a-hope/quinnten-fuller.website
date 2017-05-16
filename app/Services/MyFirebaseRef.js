var App;
(function (App) {
    var Services;
    (function (Services) {
        var MyFirebaseRef = (function () {
            function MyFirebaseRef() {
                this.config = ({
                    apiKey: "AIzaSyCdCVmXkEDI7PwRIMFRba6aA6_xiy0UhEU",
                    authDomain: "intercom-78436.firebaseapp.com",
                    databaseURL: "https://intercom-78436.firebaseio.com",
                    storageBucket: "intercom-78436.appspot.com",
                });
                firebase.apps.length === 0 ? this.firebase = firebase.initializeApp(this.config) : this.firebase = firebase.apps[0];
                this.databaseRef = this.firebase.database().ref();
                this.clienteleDatabaseRef = this.databaseRef.child('Clientele');
                this.storageRef = this.firebase.storage().ref();
            }
            return MyFirebaseRef;
        })();
        Services.MyFirebaseRef = MyFirebaseRef;
        angular.module('quinntenfuller').service('MyFirebaseRef', MyFirebaseRef);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=MyFirebaseRef.js.map