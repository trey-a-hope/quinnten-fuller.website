declare module App.Pages.Blogs {
    import Blog = App.Models.Blog;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;
    class BlogsController {
        $modal: ng.ui.bootstrap.IModalService;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        loginService: LoginService;
        $scope: any;
        modalService: ModalService;
        $state: ng.ui.IStateService;
        blogs: Array<Blog>;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef, loginService: LoginService, $scope: any, modalService: ModalService, $state: ng.ui.IStateService);
        getBlogs: () => void;
        viewBlog: (blog: Blog, index: number) => void;
        addBlog: () => void;
        editBlog: (blog: Blog) => void;
        deleteBlog: (blog: Blog) => void;
    }
}
