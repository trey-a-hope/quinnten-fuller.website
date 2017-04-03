var App;
(function (App) {
    var Contact;
    (function (Contact) {
        var MainController = (function () {
            function MainController($scope, $http, modalService) {
                var _this = this;
                this.$scope = $scope;
                this.$http = $http;
                this.modalService = modalService;
                this.attemptedSend = false;
                this.scroll = function (href) {
                    $('html, body').stop().animate({
                        scrollTop: ($(href).offset().top - 80)
                    }, 1250, 'easeInOutExpo');
                    event.preventDefault();
                };
                this.sendEmail = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        var data = {
                            firstName: _this.firstName,
                            lastName: _this.lastName,
                            email: _this.email,
                            message: _this.message
                        };
                        _this.$http({
                            method: 'POST',
                            url: 'php/sendEmail.php',
                            data: data,
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                        }).success(function (result) {
                            _this.firstName = '';
                            _this.lastName = '';
                            _this.email = '';
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
            MainController.$inject = ['$scope', '$http', 'ModalService'];
            return MainController;
        })();
        Contact.MainController = MainController;
        angular.module('quinntenfuller').controller('MainController', MainController);
    })(Contact = App.Contact || (App.Contact = {}));
})(App || (App = {}));
//# sourceMappingURL=MainController.js.map