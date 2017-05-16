module App.Pages.Services {
    import Clientele = Models.Clientele;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    export class ServicesController {

        static $inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public loginService: LoginService,
            public $scope: any,
            public modalService: ModalService){
        }

        /* New SEO */
        newSEO = (): void => {
            this.$modal.open({
                templateUrl: 'app/Modal/NewSEOModalTemplate.html',
                controller: 'NewSEOModalController as vm',
                size: 'md',
                backdrop: 'static'
            });
        }

    }

    angular.module('quinntenfuller').controller('ServicesController', ServicesController);
}
