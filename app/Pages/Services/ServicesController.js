var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Services;
        (function (Services) {
            var ServicesController = (function () {
                function ServicesController($modal, $http, myFirebaseRef, loginService, $scope, modalService) {
                    var _this = this;
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                    this.newSEO = function () {
                        _this.$modal.open({
                            templateUrl: 'app/Modal/NewSEOModalTemplate.html',
                            controller: 'NewSEOModalController as vm',
                            size: 'md',
                            backdrop: 'static'
                        });
                    };
                }
                return ServicesController;
            }());
            ServicesController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
            Services.ServicesController = ServicesController;
            angular.module('quinntenfuller').controller('ServicesController', ServicesController);
        })(Services = Pages.Services || (Pages.Services = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=ServicesController.js.map