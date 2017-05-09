module App.Contact {
    import ModalService = Services.ModalService;

    export class MainController {
        name: string;
        company: string;
        email: string;
        phoneNumber: string;
        message: string;
        attemptedSend: boolean = false;
        today: Date = new Date();

        clienteleList: Array<Clientele> = new Array<Clientele>();

        static $inject = ['$modal', '$scope', '$http', 'ModalService'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, public $scope: ng.IScope, public $http: ng.IHttpService, public modalService: ModalService){
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

        scroll = (href: string): void => {
            $('html, body').stop().animate({
                scrollTop: ($(href).offset().top - 80)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        }

        /* New SEO */
        newSEO = (): void => {
            this.$modal.open({
                templateUrl: 'app/Modal/NewSEOModalTemplate.html',
                controller: 'NewSEOModalController as vm',
                size: 'md',
                backdrop: 'static'
                // resolve: {
                // }
            });
        }

        /* Clientele */
        

        sendEmail = (form: ng.IFormController): void =>{
            this.attemptedSend = true;
            if(form.$valid){
                /* Create data */
                var data = {
                    name: this.name,
                    company: this.company,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    message: this.message
                };
                this.$http({
                    method: 'POST',
                    url: 'php/sendEmail.php',
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success((result: any) => {
                    /* Reset input fields. */
                    this.name = '';
                    this.company = '';
                    this.email = '';
                    this.phoneNumber = '';
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


    export class Clientele {
        public text: string;
        public date: Date;
        public category: string;
        public sharelink: string;
        public twitterLink: string;
        public facebookLink: string;
        public linkedinLink: string;
    }

    angular.module('quinntenfuller').controller('MainController', MainController);
}
