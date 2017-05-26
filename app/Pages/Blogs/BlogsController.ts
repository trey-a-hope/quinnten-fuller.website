module App.Pages.Blogs {
    import Blog = App.Models.Blog;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    export class BlogsController {

        blogs: Array<Blog> = new Array<Blog>();

        static $inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public loginService: LoginService,
            public $scope: any,
            public modalService: ModalService){
                this.getBlogs()
        }

        getBlogs = (): void => {
            this.blogs = [];
            this.myFirebaseRef.blogDatabaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
                this.blogs.push(snapshot.val());
                /* Refresh UI. */
                if(!this.$scope.$$phase){
                    this.$scope.$apply();
                }
            });
        }

        openBlog = (blog: Blog, index: number): void => {
            this.$modal.open({
               templateUrl: 'app/Pages/Blogs/ViewBlogModalTemplate.html',
               controller: 'ViewBlogModalController as vm',
               size: 'lg',
               backdrop: 'static',
               resolve: {
                    index: () => {
                        return index;
                    },
                    blogs: () => {
                        return this.blogs;
                    }
               }
           });
        }

        addBlog = (): void => {
            this.$modal.open({
                templateUrl: 'app/Pages/Blogs/AddEditBlogModalTemplate.html',
                controller: 'AddEditBlogModalController as vm',
                size: 'lg',
                backdrop: 'static',
                resolve: {
                    isEdit: (): boolean => {
                        return false;
                    },
                    blog: (): Blog => {
                        return null;
                    }
                }
            }).result.then(() =>{
                this.modalService.displayToast('Blog Added', '', 'success');
                this.getBlogs();
            });
        }

        editBlog = (blog: Blog): void => {
            this.$modal.open({
                templateUrl: 'app/Pages/Blogs/AddEditBlogModalTemplate.html',
                controller: 'AddEditBlogModalController as vm',
                size: 'lg',
                backdrop: 'static',
                resolve: {
                isEdit: (): boolean => {
                    return true;
                },
                blog: (): Blog => {
                        return blog;
                    }
                }
            });
        }

        deleteBlog = (blog: Blog): void => {
            this.modalService.displayConfirmation('Hit yes to confirm.', 'Delete Blog?', 'Yes')
                .then(() =>{
                    this.myFirebaseRef.blogDatabaseRef.child(blog.id).remove();
                    this.modalService.displayToast('Blog Deleted', '', 'success');
                    this.getBlogs();
                })
                .catch(() =>{});
        }

        

    }

    angular.module('quinntenfuller').controller('BlogsController', BlogsController);
}
