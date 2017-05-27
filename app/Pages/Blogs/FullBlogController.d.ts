declare module App.Pages.Blogs {
    import Blog = App.Models.Blog;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;
    class FullBlogController {
        $modal: ng.ui.bootstrap.IModalService;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        loginService: LoginService;
        $scope: any;
        modalService: ModalService;
        $state: ng.ui.IStateService;
        $location: ng.ILocationService;
        blog: Blog;
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef, loginService: LoginService, $scope: any, modalService: ModalService, $state: ng.ui.IStateService, $location: ng.ILocationService);
        back: () => void;
        share: (provider: string) => void;
    }
}
