var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Contact;
        (function (Contact) {
            var ContactController = (function () {
                function ContactController($modal, $http, myFirebaseRef, $scope, modalService, emailService, constants) {
                    var _this = this;
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.$scope = $scope;
                    this.modalService = modalService;
                    this.emailService = emailService;
                    this.constants = constants;
                    this.attemptedSend = false;
                    this.phoneNumberRegex = /^\d{10}$/;
                    this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    this.sendEmail = function (form) {
                        _this.attemptedSend = true;
                        if (form.$valid) {
                            _this.emailService.sendEmail(_this.constants.CONTACT_FORM_EMAIL, 'You Have a New Contact - ' + _this.name, 'Company: ' + _this.company + '\n' +
                                'Email: ' + _this.email + '\n' +
                                'Phone Number: ' + _this.phoneNumber + '\n' +
                                'Message: ' + _this.message)
                                .then(function (result) {
                                _this.name = '';
                                _this.company = '';
                                _this.email = '';
                                _this.phoneNumber = '';
                                _this.message = '';
                                form.$setPristine();
                                _this.modalService.displayToast('Got It', 'Message sent, I will respond shortly.', 'success');
                            }).catch(function (error) {
                                _this.modalService.displayToast('Error', error.message, 'danger');
                            });
                        }
                        else {
                            _this.modalService.displayToast('Error', 'There were erros in your submission.', 'danger');
                        }
                    };
                }
                return ContactController;
            }());
            ContactController.$inject = ['$modal', '$http', 'MyFirebaseRef', '$scope', 'ModalService', 'EmailService', 'Constants'];
            Contact.ContactController = ContactController;
            angular.module('quinntenfuller').controller('ContactController', ContactController);
        })(Contact = Pages.Contact || (Pages.Contact = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=ContactController.js.map