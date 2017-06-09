module App.Modal {

    import Clientele = Models.Clientele;
    import ModalService = Services.ModalService;
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class NewClienteleModalController {
        clientele: Clientele = new Clientele();
        attemptedSend: boolean = false;

        static $inject = ['$modalInstance', '$q','ModalService', 'MyFirebaseRef', 'isEdit', 'clientele'];
        constructor(public $modalInstance: ng.ui.bootstrap.IModalServiceInstance, 
            public $q: ng.IQService, 
            public modalService: ModalService, 
            public myFirebaseRef: MyFirebaseRef,
            public isEdit: boolean,
            public _clientele: Clientele) { 
                if(this.isEdit){
                    this.clientele = _clientele;
                }
        }

        update = (form: any): void => {
            this.attemptedSend = true;
            if(form.$valid){
                var fileChooser: any = document.getElementById('file-chooser-clientele');     
                var file = fileChooser.files[0]; 

                if(file){
                    var uploadTask = this.myFirebaseRef.storageRef.child("ClientelePage/" + this.clientele.id).put(file);
                    uploadTask.on('state_changed', (snapshot: any) => {
                    }, (error: any) => {
                        this.modalService.displayToast('Error', error, 'danger');
                    }, (success: any) => {
                        this.clientele.imageDownloadUrl = uploadTask.snapshot.downloadURL;
                        this.myFirebaseRef.clienteleDatabaseRef.child(this.clientele.id).update(this.clientele);
                        this.modalService.displayToast('Success', 'Updated clientele.', 'success');
                        this.$modalInstance.close();
                    });
                }else{
                    this.myFirebaseRef.clienteleDatabaseRef.child(this.clientele.id).update(this.clientele);
                    this.$modalInstance.close();
                    this.modalService.displayToast('Success', 'Updated clientele.', 'success');
                }
            }else{
                this.modalService.displayToast('Sorry', 'There were errors in your submission.', 'danger')
            }
        }

        submit = (form: any): void => {
            this.attemptedSend = true;
            if(form.$valid){
                var fileChooser: any = document.getElementById('file-chooser-clientele');     
                var file = fileChooser.files[0]; 

                if(file){
                    var newPostKey: string = this.myFirebaseRef.clienteleDatabaseRef.push().key.toString();
                    this.clientele.id = newPostKey;

                    var uploadTask = this.myFirebaseRef.storageRef.child("ClientelePage/" + this.clientele.id).put(file);
                    uploadTask.on('state_changed', (snapshot: any) => {
                    }, (error: any) => {
                        this.modalService.displayToast('Error', error, 'danger');
                    }, (success: any) => {
                        this.clientele.imageDownloadUrl = uploadTask.snapshot.downloadURL;
                        this.myFirebaseRef.clienteleDatabaseRef.child(newPostKey.toString()).update(this.clientele);
                        this.modalService.displayToast('Success', 'Added new clientele.', 'success');
                        this.$modalInstance.close();
                    });
                }else{
                    this.modalService.displayToast('Error', 'Must select an image for this client.', 'danger');;
                }   
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