declare module App.Contact {
    import ModalService = Services.ModalService;
    class MainController {
        $scope: ng.IScope;
        $http: ng.IHttpService;
        modalService: ModalService;
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        attemptedSend: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $http: ng.IHttpService, modalService: ModalService);
        sendEmail: (form: ng.IFormController) => void;
    }
}
