var App;
(function (App) {
    var Services;
    (function (Services) {
        var LoginService = (function () {
            function LoginService(modalService) {
                var _this = this;
                this.modalService = modalService;
                this.loggedIn = false;
                this.login = function () {
                    _this.loggedIn = true;
                };
                this.logout = function () {
                    _this.loggedIn = false;
                };
                this.isLoggedIn = function () {
                    return _this.loggedIn;
                };
                this.loggedIn ? this.modalService.displayToast('Dont Forget', 'Turn login service off after testing.', 'success') : 'f';
            }
            return LoginService;
        }());
        LoginService.$inject = ['ModalService'];
        Services.LoginService = LoginService;
        angular.module('quinntenfuller').service('LoginService', LoginService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=LoginService.js.map