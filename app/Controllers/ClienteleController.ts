module App.Clientele {
    import Clientele = Models.Clientele;
    import LoginService = Services.LoginService;
    import ModalService = Services.ModalService;
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class ClienteleController {
        clienteleList: Array<Clientele> = new Array<Clientele>();

        static $inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public loginService: LoginService,
            public $scope: any){
            this.myFirebaseRef.clienteleDatabaseRef.on('value', (snapshot: any) => {
                this.clienteleList = snapshot.val();
                /* Refresh UI. */
                if(!this.$scope.$$phase){
                    this.$scope.$apply();
                }
            });
        }

        addClientele = (): void => {
            this.$modal.open({
                templateUrl: 'app/Modal/NewClienteleModalTemplate.html',
                controller: 'NewClienteleModalController as vm',
                size: 'md',
                backdrop: 'static'
            });
        }

        shareClientele = (): void => {
            alert("TODO: Share");
        }

        updateClientele = (): void => {
            alert("TODO: Update");
        }

        deleteClientele = (): void => {
            alert("TODO: Delete");
        }

    }

    angular.module('quinntenfuller').controller('ClienteleController', ClienteleController);
}
