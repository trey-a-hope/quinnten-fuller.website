var App;
(function (App) {
    var Modal;
    (function (Modal) {
        var NewSEOModalController = (function () {
            function NewSEOModalController($modalInstance, $q) {
                var _this = this;
                this.$modalInstance = $modalInstance;
                this.$q = $q;
                this.acknowledge = function () {
                    _this.$modalInstance.close();
                };
                this.cancel = function () {
                    _this.$modalInstance.dismiss();
                };
            }
            NewSEOModalController.$inject = ['$modalInstance', '$q'];
            return NewSEOModalController;
        })();
        Modal.NewSEOModalController = NewSEOModalController;
        angular.module('quinntenfuller').controller('NewSEOModalController', NewSEOModalController);
    })(Modal = App.Modal || (App.Modal = {}));
})(App || (App = {}));
//# sourceMappingURL=NewSEOModalController.js.map