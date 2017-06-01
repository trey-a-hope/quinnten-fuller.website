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
        /* Regex */
        phoneNumberRegex: RegExp = /^\d{10}$/;
        emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        static $inject = ['$modal', '$http', 'MyFirebaseRef', '$scope', 'ModalService', 'EmailService', 'Constants'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public $scope: any,
            public modalService: ModalService,
            public emailService: EmailService,
            public constants: any){
        }

        sendEmail = (form: ng.IFormController): void =>{
            this.attemptedSend = true;
            if(form.$valid){
                this.emailService.sendEmail(
                    this.constants.CONTACT_FORM_EMAIL,
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
