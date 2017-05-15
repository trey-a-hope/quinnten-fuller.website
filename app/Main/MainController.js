var App;
(function (App) {
    var Contact;
    (function (Contact) {
        var MainController = (function () {
            function MainController($modal, $scope, $http, modalService) {
                var _this = this;
                this.$modal = $modal;
                this.$scope = $scope;
                this.$http = $http;
                this.modalService = modalService;
                this.attemptedSend = false;
                this.today = new Date();
                this.clienteleList = new Array();
                this.scroll = function (href) {
                    $('html, body').stop().animate({
                        scrollTop: ($(href).offset().top - 80)
                    }, 1250, 'easeInOutExpo');
                    event.preventDefault();
                };
                this.newSEO = function () {
                    _this.$modal.open({
                        templateUrl: 'app/Modal/NewSEOModalTemplate.html',
                        controller: 'NewSEOModalController as vm',
                        size: 'md',
                        backdrop: 'static'
                    });
                };
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
                var c1 = new Clientele();
                c1.text = "Clientele XYZ did much better this year because of XYZ.";
                c1.category = "SEO OPTIMIZATION, EMAIL MARETING";
                c1.date = new Date();
                this.clienteleList.push(c1);
                var c2 = new Clientele();
                c2.text = "This is another example, with a different date as well.";
                c2.category = "AUTHENCTIC INTELLIGENCE";
                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 5);
                c2.date = tomorrow;
                this.clienteleList.push(c2);
            }
            MainController.$inject = ['$modal', '$scope', '$http', 'ModalService'];
            return MainController;
        })();
        Contact.MainController = MainController;
        var Clientele = (function () {
            function Clientele() {
            }
            return Clientele;
        })();
        Contact.Clientele = Clientele;
        angular.module('quinntenfuller').controller('MainController', MainController);
    })(Contact = App.Contact || (App.Contact = {}));
})(App || (App = {}));
//# sourceMappingURL=MainController.js.map