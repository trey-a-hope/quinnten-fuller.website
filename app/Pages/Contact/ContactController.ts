module App.Pages.Contact {
    import EmailService = App.Services.EmailService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    export class ContactController {
        name: string;
        company: string;
        email: string;
        phoneNumber: string;
        message: string;
        attemptedSend: boolean = false;

        static $inject = ['$modal', '$http', 'MyFirebaseRef', '$scope', 'ModalService', 'EmailService'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public $scope: any,
            public modalService: ModalService,
            public emailService: EmailService){
        }

        sendEmail = (form: ng.IFormController): void =>{
            this.attemptedSend = true;
            if(form.$valid){
                this.emailService.sendEmail(
                    'trey.a.hope@gmail.com',
                    'You Have a New Contact - ' +this.name,
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
    }

    angular.module('quinntenfuller').controller('ContactController', ContactController);
}
