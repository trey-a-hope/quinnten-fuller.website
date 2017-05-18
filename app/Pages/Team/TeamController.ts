module App.Pages.Team {
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    export class TeamController {
        profileImageUrl: string;

        static $inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public loginService: LoginService,
            public $scope: any,
            public modalService: ModalService){
                console.log('Fetching image url...');
                this.myFirebaseRef.teamDatabaseRef.child('ImageUrl').on('value', (snapshot: FirebaseDataSnapshot) => {
                    this.profileImageUrl = snapshot.val();
                    console.log(this.profileImageUrl);
                    if(!this.$scope.$$phase){
                        this.$scope.$apply();
                    }
                });
        }

        uploadImage = (): void => {
            var fileChooser: any = document.getElementById('file-chooser');     
            var file = fileChooser.files[0]; 

            if(file){
                var uploadTask = this.myFirebaseRef.storageRef.child("TeamPage/ProfilePic").put(file);
                uploadTask.on('state_changed', 
                (snapshot: any) => {
                }, (error: any) => {
                    this.modalService.displayToast('Error', error, 'danger');
                }, (success: any) => {
                    this.modalService.displayToast('Success', 'Image uploaded.', 'success');
                    var downloadURL = uploadTask.snapshot.downloadURL;
                    this.myFirebaseRef.teamDatabaseRef.child('ImageUrl').set(downloadURL);
                });
            }
            else{
                this.modalService.displayToast('Error', 'Must select an image first.', 'danger');;
            }    
        }
    }

    angular.module('quinntenfuller').controller('TeamController', TeamController);
}
