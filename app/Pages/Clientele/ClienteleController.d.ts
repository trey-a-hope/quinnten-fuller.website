declare module App.Pages.Clientele {
    import Clientele = Models.Clientele;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;
    class ClienteleController {
        $modal: ng.ui.bootstrap.IModalService;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        loginService: LoginService;
        $scope: any;
        modalService: ModalService;
        clienteleList: Array<Clientele>;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef, loginService: LoginService, $scope: any, modalService: ModalService);
        editClientele: (clientele: Clientele) => void;
        addClientele: () => void;
        deleteClientele: (clientele: Clientele) => void;
        shareClientele: () => void;
    }
}
