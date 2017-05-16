declare module App.Clientele {
    import Clientele = Models.Clientele;
    import LoginService = Services.LoginService;
    import MyFirebaseRef = Services.MyFirebaseRef;
    class ClienteleController {
        $modal: ng.ui.bootstrap.IModalService;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        loginService: LoginService;
        $scope: any;
        clienteleList: Array<Clientele>;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef, loginService: LoginService, $scope: any);
        addClientele: () => void;
        shareClientele: () => void;
        updateClientele: () => void;
        deleteClientele: () => void;
    }
}
