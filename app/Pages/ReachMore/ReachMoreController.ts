module App.Pages.ReachMore {
    import Clientele = Models.Clientele;
    import LoginService = App.Services.LoginService;
    import ModalService = App.Services.ModalService;
    import MyFirebaseRef = App.Services.MyFirebaseRef;

    export class ReachMoreController {

        static $inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, 
            public $http: ng.IHttpService, 
            public myFirebaseRef: MyFirebaseRef, 
            public loginService: LoginService,
            public $scope: any,
            public modalService: ModalService){
        }

        scroll = (href: string): void => {
            $('html, body').stop().animate({
                scrollTop: ($(href).offset().top - 80)
            }, 1250, 'easeInOutExpo');
            //event.preventDefault();
        }  

    }

    angular.module('quinntenfuller').controller('ReachMoreController', ReachMoreController);
}
