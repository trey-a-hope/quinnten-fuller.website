declare module App.Contact {
    import ModalService = Services.ModalService;
    class MainController {
        $modal: ng.ui.bootstrap.IModalService;
        $scope: ng.IScope;
        $http: ng.IHttpService;
        modalService: ModalService;
        name: string;
        company: string;
        email: string;
        phoneNumber: string;
        message: string;
        attemptedSend: boolean;
        today: Date;
        clienteleList: Array<Clientele>;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $scope: ng.IScope, $http: ng.IHttpService, modalService: ModalService);
        scroll: (href: string) => void;
        newSEO: () => void;
        sendEmail: (form: ng.IFormController) => void;
    }
    class Clientele {
        text: string;
        date: Date;
        category: string;
        sharelink: string;
        twitterLink: string;
        facebookLink: string;
        linkedinLink: string;
    }
}
