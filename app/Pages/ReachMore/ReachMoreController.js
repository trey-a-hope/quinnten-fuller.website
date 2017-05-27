var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var ReachMore;
        (function (ReachMore) {
            var ReachMoreController = (function () {
                function ReachMoreController($modal, $http, myFirebaseRef, loginService, $scope, modalService) {
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                    this.scroll = function (href) {
                        $('html, body').stop().animate({
                            scrollTop: ($(href).offset().top - 80)
                        }, 1250, 'easeInOutExpo');
                    };
                }
                return ReachMoreController;
            }());
            ReachMoreController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
            ReachMore.ReachMoreController = ReachMoreController;
            angular.module('quinntenfuller').controller('ReachMoreController', ReachMoreController);
        })(ReachMore = Pages.ReachMore || (Pages.ReachMore = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=ReachMoreController.js.map