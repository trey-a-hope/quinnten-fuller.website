module App.Modal {

    import Clientele = Models.Clientele;
    import EmailService = Services.EmailService;
    import ModalService = Services.ModalService;

    export class NewSEOModalController {
        name: string;
        company: string;
        email: string;
        phoneNumber: string;
        message: string;
        attemptedSend: boolean = false;

        static $inject = ['$modalInstance', '$q', '$http', 'ModalService', 'EmailService'];
        constructor(public $modalInstance: ng.ui.bootstrap.IModalServiceInstance, 
            public $q: ng.IQService,
            public $http: ng.IHttpService,
            public modalService: ModalService,
            public emailService: EmailService) { 
        }

        acknowledge = (form: any): void => {
            this.attemptedSend = true;
            if(form.$valid){
                this.emailService.sendEmail(
                    'trey.a.hope@gmail.com',
                    'You Have a New SEO - ' +this.name,
                    'Company: ' + this.company + '\n' +
                    'Email: ' + this.email + '\n' +  
                    'Phone Number: ' + this.phoneNumber + '\n' + 
                    'Message: ' + this.message)
                    .then((result: any) => {
                        /* Reset input fields. */
                        this.name = '';
                        this.company = '';
                        this.email = '';
                        this.phoneNumber = '';
                        this.message = '';
                        /* Reset form. */
                        form.$setPristine();
                        this.modalService.displayToast('Got It', 'Message sent, I will respond shortly.', 'success');
                    }).catch((error: any) => {
                        this.modalService.displayToast('Error', error.message, 'danger');
                    });
            }else{
                this.modalService.displayToast('Error', 'There were erros in your submission.', 'danger');
            }
        }

        cancel = (): void => {
            this.$modalInstance.dismiss();
        }
 
    }

    angular.module('quinntenfuller').controller('NewSEOModalController', NewSEOModalController);
}