var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var About;
        (function (About) {
            var AboutController = (function () {
                function AboutController($modal, $http, myFirebaseRef, loginService, $scope, modalService) {
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                }
                return AboutController;
            }());
            AboutController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
            About.AboutController = AboutController;
            angular.module('quinntenfuller').controller('AboutController', AboutController);
        })(About = Pages.About || (Pages.About = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=AboutController.js.map