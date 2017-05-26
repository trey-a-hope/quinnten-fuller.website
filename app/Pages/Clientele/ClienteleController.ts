module App.Pages.Clientele {
    import Clientele = Models.Clientele;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    export class ClienteleController {
        clienteleList: Array<Clientele> = new Array<Clientele>();

        static $inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public loginService: LoginService,
            public $scope: any,
            public modalService: ModalService){
            this.myFirebaseRef.clienteleDatabaseRef.on('value', (snapshot: any) => {
                this.clienteleList = snapshot.val();
                /* Refresh UI. */
                if(!this.$scope.$$phase){
                    this.$scope.$apply();
                }
            });
        }

        editClientele = (clientele: Clientele): void => {
            this.$modal.open({
                templateUrl: 'app/Modal/NewClienteleModalTemplate.html',
                controller: 'NewClienteleModalController as vm',
                size: 'md',
                backdrop: 'static',
                resolve: {
                    isEdit: (): boolean => {
                        return true;
                    },
                    clientele: (): Clientele => {
                        return angular.copy(clientele);
                    }
                }
            });
        }

        addClientele = (): void => {
            this.$modal.open({
                templateUrl: 'app/Modal/NewClienteleModalTemplate.html',
                controller: 'NewClienteleModalController as vm',
                size: 'md',
                backdrop: 'static',
                resolve: {
                    isEdit: (): boolean => {
                        return false;
                    },
                    clientele: (): Clientele => {
                        return null;
                    }
                }
            });
        }

        deleteClientele = (clientele: Clientele): void => {
            this.modalService.displayConfirmation("Hit yes to confirm.", "Delete Clientele", "Yes")
                .then((result: any) => {
                    this.myFirebaseRef.clienteleDatabaseRef.child(clientele.id).remove();
                    this.modalService.displayToast('Success', 'Clientele deleted.', 'success');
                })
                .catch((error: any) => {})
                .finally(() => {});
        }

    }

    angular.module('quinntenfuller').controller('ClienteleController', ClienteleController);
}
