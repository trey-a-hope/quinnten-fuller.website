declare module App.Modal {
    import EmailService = Services.EmailService;
    import ModalService = Services.ModalService;
    class NewSEOModalController {
        $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        $q: ng.IQService;
        $http: ng.IHttpService;
        modalService: ModalService;
        emailService: EmailService;
        name: string;
        company: string;
        email: string;
        phoneNumber: string;
        message: string;
        attemptedSend: boolean;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $q: ng.IQService, $http: ng.IHttpService, modalService: ModalService, emailService: EmailService);
        acknowledge: (form: any) => void;
        cancel: () => void;
    }
}
