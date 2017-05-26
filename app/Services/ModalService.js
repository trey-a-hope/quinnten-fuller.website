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
                this.displayConfirmation = function (confirmationMessage, confirmationHeader, confirmButtonText) {
                    var deferred = _this.$q.defer();
                    _this.$modal.open({
                        templateUrl: 'app/Modal/DisplayConfirmationModalTemplate.html',
                        controller: 'DisplayConfirmationModalController as vm',
                        size: 'md',
                        backdrop: 'static',
                        resolve: {
                            deferred: function () {
                                return deferred;
                            },
                            confirmationMessage: function () {
                                return confirmationMessage;
                            },
                            confirmationHeader: function () {
                                return confirmationHeader;
                            },
                            confirmButtonText: function () {
                                return confirmButtonText;
                            }
                        }
                    });
                    return deferred.promise;
                };
            }
            return ModalService;
        }());
        ModalService.$inject = ['$modal', '$q', 'ngToast'];
        Services.ModalService = ModalService;
        angular.module('quinntenfuller').service('ModalService', ModalService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=ModalService.js.map