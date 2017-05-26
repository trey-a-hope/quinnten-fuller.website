var App;
(function (App) {
    var Modal;
    (function (Modal) {
        var DisplayConfirmationModalController = (function () {
            function DisplayConfirmationModalController($scope, confirmationMessage, confirmationHeader, confirmButtonText, deferred) {
                var _this = this;
                this.$scope = $scope;
                this.confirmationMessage = confirmationMessage;
                this.confirmationHeader = confirmationHeader;
                this.confirmButtonText = confirmButtonText;
                this.deferred = deferred;
                this.confirm = function () {
                    _this.deferred.resolve();
                    _this.$scope.$close(true);
                };
                this.cancel = function () {
                    _this.deferred.reject();
                    _this.$scope.$dismiss(false);
                };
            }
            return DisplayConfirmationModalController;
        }());
        DisplayConfirmationModalController.$inject = ['$scope', 'confirmationMessage', 'confirmationHeader', 'confirmButtonText', 'deferred'];
        angular.module('quinntenfuller').controller('DisplayConfirmationModalController', DisplayConfirmationModalController);
    })(Modal = App.Modal || (App.Modal = {}));
})(App || (App = {}));
//# sourceMappingURL=DisplayConfirmationModalController.js.map