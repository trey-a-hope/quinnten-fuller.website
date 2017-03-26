var App;
(function (App) {
    var Services;
    (function (Services) {
        var ModalService = (function () {
            function ModalService($modal, $q, ngToast) {
                var _this = this;
                this.$modal = $modal;
                this.$q = $q;
                this.ngToast = ngToast;
                this.toastTypes = ['success', 'info', 'warning', 'danger'];
                this.displayToast = function (title, subTitle, toastType) {
                    if (_this.toastTypes.indexOf(toastType) < 0) {
                        alert("Wrong toast type being passed in.");
                        return;
                    }
                    _this.ngToast.create({
                        className: toastType,
                        content: '<strong>' + title + '</strong>' + ' ' + subTitle
                    });
                };
            }
            ModalService.$inject = ['$modal', '$q', 'ngToast'];
            return ModalService;
        })();
        Services.ModalService = ModalService;
        angular.module('quinntenfuller').service('ModalService', ModalService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=ModalService.js.map