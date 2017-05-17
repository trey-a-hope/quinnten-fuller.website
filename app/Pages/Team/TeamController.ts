module App.Pages.Team {
    import Clientele = Models.Clientele;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    export class TeamController {

        static $inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public loginService: LoginService,
            public $scope: any,
            public modalService: ModalService){
        }

    }

    angular.module('quinntenfuller').controller('TeamController', TeamController);
}
