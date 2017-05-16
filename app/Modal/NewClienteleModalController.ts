module App.Modal {

    import Clientele = Models.Clientele;
    import ModalService = Services.ModalService;
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class NewClienteleModalController {
        clientele: Clientele = new Clientele();
        attemptedSend: boolean = false;

        static $inject = ['$modalInstance', '$q','ModalService', 'MyFirebaseRef'];
        constructor(public $modalInstance: ng.ui.bootstrap.IModalServiceInstance, public $q: ng.IQService, public modalService: ModalService, public myFirebaseRef: MyFirebaseRef) { 
        }

        submit = (form: any): void => {
            this.attemptedSend = true;
            if(form.$valid){
                var newPostKey: string = this.myFirebaseRef.clienteleDatabaseRef.push().key.toString();
                this.myFirebaseRef.clienteleDatabaseRef.child(newPostKey.toString()).update(this.clientele);
                this.modalService.displayToast('Success', 'Added new clientele.', 'success');
                this.$modalInstance.close();
            }else{
                this.modalService.displayToast('Sorry', 'There were errors in your submission.', 'danger')
            }
        }

        cancel = (): void => {
            this.$modalInstance.dismiss();
        }
 
    }

    angular.module('quinntenfuller').controller('NewClienteleModalController', NewClienteleModalController);
}