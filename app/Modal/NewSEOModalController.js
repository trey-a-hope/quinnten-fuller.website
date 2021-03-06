var App;
(function (App) {
    var Modal;
    (function (Modal) {
        var NewSEOModalController = (function () {
            function NewSEOModalController($modalInstance, $q, $http, modalService, emailService, constants) {
                var _this = this;
                this.$modalInstance = $modalInstance;
                this.$q = $q;
                this.$http = $http;
                this.modalService = modalService;
                this.emailService = emailService;
                this.constants = constants;
                this.attemptedSend = false;
                this.phoneNumberRegex = /^\d{10}$/;
                this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.acknowledge = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        _this.emailService.sendEmail(_this.constants.SEO_AUDIT_EMAIL, 'You Have a New SEO - ' + _this.name, 'Company: ' + _this.company + '\n' +
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
                            _this.$modalInstance.close();
                        }).catch(function (error) {
                            _this.modalService.displayToast('Error', error.message, 'danger');
                        });
                    }
                    else {
                        _this.modalService.displayToast('Error', 'There were erros in your submission.', 'danger');
                    }
                };
                this.cancel = function () {
                    _this.$modalInstance.dismiss();
                };
            }
            return NewSEOModalController;
        }());
        NewSEOModalController.$inject = ['$modalInstance', '$q', '$http', 'ModalService', 'EmailService', 'Constants'];
        Modal.NewSEOModalController = NewSEOModalController;
        angular.module('quinntenfuller').controller('NewSEOModalController', NewSEOModalController);
    })(Modal = App.Modal || (App.Modal = {}));
})(App || (App = {}));
//# sourceMappingURL=NewSEOModalController.js.map