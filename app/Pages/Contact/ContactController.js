var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Contact;
        (function (Contact) {
            var ContactController = (function () {
                function ContactController($modal, $http, myFirebaseRef, loginService, $scope, modalService) {
                    var _this = this;
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                    this.attemptedSend = false;
                    this.today = new Date();
                    this.sendEmail = function (form) {
                        _this.attemptedSend = true;
                        if (form.$valid) {
                            var data = {
                                name: _this.name,
                                company: _this.company,
                                email: _this.email,
                                phoneNumber: _this.phoneNumber,
                                message: _this.message
                            };
                            _this.$http({
                                method: 'POST',
                                url: 'php/sendEmail.php',
                                data: data,
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                            }).success(function (result) {
                                _this.name = '';
                                _this.company = '';
                                _this.email = '';
                                _this.phoneNumber = '';
                                _this.message = '';
                                form.$setPristine();
                                _this.modalService.displayToast('Got It', 'Message sent, I will respond shortly.', 'success');
                            }).error(function (error) {
                                _this.modalService.displayToast('Error', error.message, 'danger');
                            });
                        }
                        else {
                            _this.modalService.displayToast('Error', 'There were erros in your submission.', 'danger');
                        }
                    };
                }
                ContactController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
                return ContactController;
            })();
            Contact.ContactController = ContactController;
            angular.module('quinntenfuller').controller('ContactController', ContactController);
        })(Contact = Pages.Contact || (Pages.Contact = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=ContactController.js.map