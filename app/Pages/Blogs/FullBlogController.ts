module App.Pages.Blogs {
    import Blog = App.Models.Blog;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    export class FullBlogController {
        blog: Blog = null;

        static $inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService', '$state', '$location'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public loginService: LoginService,
            public $scope: any,
            public modalService: ModalService,
            public $state: ng.ui.IStateService,
            public $location: ng.ILocationService){
                /* Url was manually entered... */
                if(this.$state.params.blog == null){
                    var blogId = $location.search().id; 
                    this.myFirebaseRef.blogDatabaseRef.child(blogId).on('value', (snapshot: FirebaseDataSnapshot) => {
                        this.blog = snapshot.val();
                        /* Refresh UI. */
                        if(!this.$scope.$$phase){
                            this.$scope.$apply();
                        }
                    });
                }
                /* Was taken to blog through clicking on a blog... */
                else{
                    this.blog = this.$state.params.blog;
                    $location.search('id', this.blog.id);
                }
        }

        back = (): void => {
            this.$state.go('main');
        }

        share = (provider: string): void => {
            var url: string = this.$location.absUrl();
            console.log(url);
            switch(provider){
                case 'TWITTER':
                    alert('Share link \'' + url + '\' to Twitter');
                    break;
                case 'FACEBOOK':
                    alert('Share link \'' + url + '\' to Twitter');
                    break;
                case 'LINKEDIN':
                    alert('Share link \'' + url + '\' to Twitter');
                    break;
                default:
                    break;
            }
        }

    }

    angular.module('quinntenfuller').controller('FullBlogController', FullBlogController);
}
