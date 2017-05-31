declare module App.Pages.Contact {
    import EmailService = App.Services.EmailService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;
    class ContactController {
        $modal: ng.ui.bootstrap.IModalService;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        $scope: any;
        modalService: ModalService;
        emailService: EmailService;
        constants: any;
        name: string;
        company: string;
        email: string;
        phoneNumber: string;
        message: string;
        attemptedSend: boolean;
        phoneNumberRegex: RegExp;
        emailRegex: RegExp;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef, $scope: any, modalService: ModalService, emailService: EmailService, constants: any);
        sendEmail: (form: ng.IFormController) => void;
    }
}
