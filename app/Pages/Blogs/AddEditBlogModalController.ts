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
            //this.attemptedSend = true;
            //if(form.$valid){
                var newPostKey: string = this.myFirebaseRef.blogDatabaseRef.push().key.toString();
                this.blog.id = newPostKey;
                this.blog.postDateTime = new Date().toDateString();
                this.myFirebaseRef.blogDatabaseRef.child(newPostKey).update(this.blog);
                this.$modalInstance.close(true);
            // }else{
            //     this.modalService.displayToast('Error', 'There were errors in your submission.', 'danger');
            // }
        }

        update = (): void => {
            this.$modalInstance.close(true);
        }
    }

    angular.module('quinntenfuller').controller('AddEditBlogModalController', AddEditBlogModalController);
}
