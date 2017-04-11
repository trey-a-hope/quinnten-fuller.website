declare module App.Contact {
    import ModalService = Services.ModalService;
    class MainController {
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
        static $inject: string[];
        constructor($scope: ng.IScope, $http: ng.IHttpService, modalService: ModalService);
        scroll: (href: string) => void;
        sendEmail: (form: ng.IFormController) => void;
    }
}
