var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Clientele;
        (function (Clientele_1) {
            var ClienteleController = (function () {
                function ClienteleController($modal, $http, myFirebaseRef, loginService, $scope, modalService) {
                    var _this = this;
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                    this.clienteleList = new Array();
                    this.editClientele = function (clientele) {
                        _this.$modal.open({
                            templateUrl: 'app/Modal/NewClienteleModalTemplate.html',
                            controller: 'NewClienteleModalController as vm',
                            size: 'md',
                            backdrop: 'static',
                            resolve: {
                                isEdit: function () {
                                    return true;
                                },
                                clientele: function () {
                                    return angular.copy(clientele);
                                }
                            }
                        });
                    };
                    this.addClientele = function () {
                        _this.$modal.open({
                            templateUrl: 'app/Modal/NewClienteleModalTemplate.html',
                            controller: 'NewClienteleModalController as vm',
                            size: 'md',
                            backdrop: 'static',
                            resolve: {
                                isEdit: function () {
                                    return false;
                                },
                                clientele: function () {
                                    return null;
                                }
                            }
                        });
                    };
                    this.deleteClientele = function (clientele) {
                        _this.modalService.displayConfirmation("Are you sure you want to delete this clientele?", "Delete", "Yes")
                            .then(function (result) {
                            _this.myFirebaseRef.clienteleDatabaseRef.child(clientele.id).remove();
                            _this.modalService.displayToast('Success', 'Clientele deleted.', 'success');
                        })
                            .catch(function (error) { })
                            .finally(function () { });
                    };
                    this.myFirebaseRef.clienteleDatabaseRef.on('value', function (snapshot) {
                        _this.clienteleList = snapshot.val();
                        if (!_this.$scope.$$phase) {
                            _this.$scope.$apply();
                        }
                    });
                }
                ClienteleController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
                return ClienteleController;
            })();
            Clientele_1.ClienteleController = ClienteleController;
            angular.module('quinntenfuller').controller('ClienteleController', ClienteleController);
        })(Clientele = Pages.Clientele || (Pages.Clientele = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=ClienteleController.js.map