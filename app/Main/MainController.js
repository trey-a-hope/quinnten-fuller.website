var App;
(function (App) {
    var Contact;
    (function (Contact) {
        var MainController = (function () {
            function MainController($modal, $scope, $http, modalService, $timeout, loginService, $state) {
                var _this = this;
                this.$modal = $modal;
                this.$scope = $scope;
                this.$http = $http;
                this.modalService = modalService;
                this.$timeout = $timeout;
                this.loginService = loginService;
                this.$state = $state;
                this.clickCount = 0;
                this.timeInMs = 0;
                this.home = function () {
                    _this.$state.go('main');
                };
                this.incrementClickCount = function () {
                    if (_this.clickCount == 0) {
                        _this.$timeout(_this.countUp, 1000);
                    }
                    _this.clickCount++;
                    if (_this.clickCount == 5) {
                        _this.loginService.login();
                        _this.modalService.displayToast('Success', 'You\'re logged in.', 'success');
                    }
                };
                this.countUp = function () {
                    if (_this.timeInMs == 3000) {
                        _this.clickCount = 0;
                        _this.timeInMs = 0;
                        _this.$timeout.cancel(null);
                    }
                    else {
                        _this.timeInMs += 1000;
                        _this.$timeout(_this.countUp, 1000);
                    }
                };
                this.isOnBlogPage = $state.includes('fullblog');
                this.$scope.$watch(function () {
                    return _this.$state.$current.name;
                }, function (newVal, oldVal) {
                    _this.isOnBlogPage = $state.includes('fullblog');
                });
            }
            return MainController;
        }());
        MainController.$inject = ['$modal', '$scope', '$http', 'ModalService', '$timeout', 'LoginService', '$state'];
        Contact.MainController = MainController;
        angular.module('quinntenfuller').controller('MainController', MainController);
    })(Contact = App.Contact || (App.Contact = {}));
})(App || (App = {}));
//# sourceMappingURL=MainController.js.map