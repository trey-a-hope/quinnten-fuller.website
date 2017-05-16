declare module App.Contact {
    import LoginService = Services.LoginService;
    import ModalService = Services.ModalService;
    class MainController {
        $modal: ng.ui.bootstrap.IModalService;
        $scope: ng.IScope;
        $http: ng.IHttpService;
        modalService: ModalService;
        $timeout: ng.ITimeoutService;
        loginService: LoginService;
        clickCount: number;
        timeInMs: number;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $scope: ng.IScope, $http: ng.IHttpService, modalService: ModalService, $timeout: ng.ITimeoutService, loginService: LoginService);
        incrementClickCount: () => void;
        countUp: () => void;
        scroll: (href: string) => void;
    }
}
