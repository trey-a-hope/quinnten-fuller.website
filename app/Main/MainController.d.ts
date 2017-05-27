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
        $state: any;
        clickCount: number;
        timeInMs: number;
        isOnBlogPage: boolean;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $scope: ng.IScope, $http: ng.IHttpService, modalService: ModalService, $timeout: ng.ITimeoutService, loginService: LoginService, $state: any);
        home: () => void;
        incrementClickCount: () => void;
        countUp: () => void;
    }
}
