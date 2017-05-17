var App;
(function (App) {
    var Modal;
    (function (Modal) {
        var NewSEOModalController = (function () {
            function NewSEOModalController($modalInstance, $q, $http, modalService, emailService) {
                var _this = this;
                this.$modalInstance = $modalInstance;
                this.$q = $q;
                this.$http = $http;
                this.modalService = modalService;
                this.emailService = emailService;
                this.attemptedSend = false;
                this.acknowledge = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        _this.emailService.sendEmail('trey.a.hope@gmail.com', 'You Have a New SEO - ' + _this.name, 'Company: ' + _this.company + '\n' +
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
                this.cancel = function () {
                    _this.$modalInstance.dismiss();
                };
            }
            NewSEOModalController.$inject = ['$modalInstance', '$q', '$http', 'ModalService', 'EmailService'];
            return NewSEOModalController;
        })();
        Modal.NewSEOModalController = NewSEOModalController;
        angular.module('quinntenfuller').controller('NewSEOModalController', NewSEOModalController);
    })(Modal = App.Modal || (App.Modal = {}));
})(App || (App = {}));
//# sourceMappingURL=NewSEOModalController.js.map