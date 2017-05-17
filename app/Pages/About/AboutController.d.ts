declare module App.Pages.About {
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;
    class AboutController {
        $modal: ng.ui.bootstrap.IModalService;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        loginService: LoginService;
        $scope: any;
        modalService: ModalService;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef, loginService: LoginService, $scope: any, modalService: ModalService);
    }
}
