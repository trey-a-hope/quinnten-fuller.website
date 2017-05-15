var App;
(function (App) {
    var Services;
    (function (Services) {
        var MyFirebaseRef = (function () {
            function MyFirebaseRef($scope) {
                this.$scope = $scope;
                this.databaseRef = firebase.database().ref();
            }
            MyFirebaseRef.$inject = ['$scope'];
            return MyFirebaseRef;
        })();
        Services.MyFirebaseRef = MyFirebaseRef;
        angular.module('quinntenfuller').service('MyFirebaseRef', MyFirebaseRef);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=MyFirebaseRef.js.map