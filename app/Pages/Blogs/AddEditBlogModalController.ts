module App.Blogs {
    import Blog = App.Models.Blog;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    class AddEditBlogModalController {
        attemptedSend: boolean = false;

        static $inject = ['$modalInstance', 'isEdit', 'blog', 'ModalService', 'MyFirebaseRef'];
        constructor(public $modalInstance: ng.ui.bootstrap.IModalServiceInstance, public isEdit: boolean, public blog: Blog, public modalService: ModalService, public myFirebaseRef: MyFirebaseRef) {
        }

        close = (): void => {
            this.$modalInstance.dismiss(false);
        }

        save = (form: ng.IFormController): void => {
            this.attemptedSend = true;
            if(form.$valid){
                var fileChooser: any = document.getElementById('file-chooser-blog');     
                var file = fileChooser.files[0]; 

                if(file){
                    var newPostKey: string = this.myFirebaseRef.blogDatabaseRef.push().key.toString();
                    this.blog.id = newPostKey;

                    var uploadTask = this.myFirebaseRef.storageRef.child("BlogPage/" + this.blog.id).put(file);
                    uploadTask.on('state_changed', (snapshot: any) => {
                    }, (error: any) => {
                        this.modalService.displayToast('Error', error, 'danger');
                    }, (success: any) => {
                        this.blog.postDateTime = new Date().toDateString();
                        this.blog.coverImageUrl = uploadTask.snapshot.downloadURL;
                        this.myFirebaseRef.blogDatabaseRef.child(this.blog.id).update(this.blog);
                        this.$modalInstance.close(true);
                    });
                }
                else{
                    this.modalService.displayToast('Error', 'Must select a cover image for blog.', 'danger');;
                }   
            }else{
                this.modalService.displayToast('Error', 'There were errors in your submission.', 'danger');
            }
        }

        update = (form: any): void => {
            this.attemptedSend = true;
            if(form.$valid){
                var fileChooser: any = document.getElementById('file-chooser-blog');     
                var file = fileChooser.files[0]; 
                if(file){
                    var uploadTask = this.myFirebaseRef.storageRef.child("BlogPage/" + this.blog.id).put(file);
                    uploadTask.on('state_changed', (snapshot: any) => {
                    }, (error: any) => {
                        this.modalService.displayToast('Error', error, 'danger');
                    }, (success: any) => {
                        this.blog.coverImageUrl = uploadTask.snapshot.downloadURL;
                        this.myFirebaseRef.blogDatabaseRef.child(this.blog.id).update(this.blog);
                        this.$modalInstance.close(true);
                    });
                }
                else{
                    this.myFirebaseRef.blogDatabaseRef.child(this.blog.id).update(this.blog);
                    this.$modalInstance.close(true);
                }   
            }else{
                this.modalService.displayToast('Error', 'There were errors in your submission.', 'danger');
            }
        }
    }

    angular.module('quinntenfuller').controller('AddEditBlogModalController', AddEditBlogModalController);
}
