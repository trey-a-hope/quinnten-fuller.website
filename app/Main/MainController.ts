module App.Contact {
    import ModalService = Services.ModalService;

    export class MainController {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        attemptedSend: boolean = false;

        static $inject = ['$scope', '$http', 'ModalService'];
        constructor(public $scope: ng.IScope, public $http: ng.IHttpService, public modalService: ModalService){
        }

        scroll = (href: string): void => {
            $('html, body').stop().animate({
                scrollTop: ($(href).offset().top - 80)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        }

        sendEmail = (form: ng.IFormController): void =>{
            this.attemptedSend = true;
            if(form.$valid){
                /* Create data */
                var data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    message: this.message
                };
                this.$http({
                    method: 'POST',			
                    url: 'php/sendEmail.php',			
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success((result: any) => {
                    /* Reset input fields. */
                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';
                    this.message = '';
                    /* Reset form. */
                    form.$setPristine();
                    this.modalService.displayToast('Got It', 'Message sent, I will respond shortly.', 'success');
                }).error((error: any) => {
                    this.modalService.displayToast('Error', error.message, 'danger');
                });
            }else{
                this.modalService.displayToast('Error', 'There were erros in your submission.', 'danger');
            }
        }
    }
    angular.module('quinntenfuller').controller('MainController', MainController);
}