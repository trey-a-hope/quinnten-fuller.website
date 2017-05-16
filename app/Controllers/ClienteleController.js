var App;
(function (App) {
    var Clientele;
    (function (Clientele_1) {
        var ClienteleController = (function () {
            function ClienteleController($modal, $http, myFirebaseRef, loginService, $scope) {
                var _this = this;
                this.$modal = $modal;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
                this.loginService = loginService;
                this.$scope = $scope;
                this.clienteleList = new Array();
                this.addClientele = function () {
                    _this.$modal.open({
                        templateUrl: 'app/Modal/NewClienteleModalTemplate.html',
                        controller: 'NewClienteleModalController as vm',
                        size: 'md',
                        backdrop: 'static'
                    });
                };
                this.shareClientele = function () {
                    alert("TODO: Share");
                };
                this.updateClientele = function () {
                    alert("TODO: Update");
                };
                this.deleteClientele = function () {
                    alert("TODO: Delete");
                };
                this.myFirebaseRef.clienteleDatabaseRef.on('value', function (snapshot) {
                    _this.clienteleList = snapshot.val();
                    if (!_this.$scope.$$phase) {
                        _this.$scope.$apply();
                    }
                });
            }
            ClienteleController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope'];
            return ClienteleController;
        })();
        Clientele_1.ClienteleController = ClienteleController;
        angular.module('quinntenfuller').controller('ClienteleController', ClienteleController);
    })(Clientele = App.Clientele || (App.Clientele = {}));
})(App || (App = {}));
//# sourceMappingURL=ClienteleController.js.map