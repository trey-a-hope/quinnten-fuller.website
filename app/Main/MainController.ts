module App.Contact {
    import LoginService = Services.LoginService;
    import ModalService = Services.ModalService;

    export class MainController {
        clickCount: number = 0;
        timeInMs = 0;
        isOnBlogPage: boolean;

        static $inject = ['$modal', '$scope', '$http', 'ModalService', '$timeout', 'LoginService', '$state'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, public $scope: ng.IScope, public $http: ng.IHttpService, 
            public modalService: ModalService, public $timeout: ng.ITimeoutService, public loginService: LoginService,
            public $state: any){
            this.isOnBlogPage = $state.includes('fullblog');

            this.$scope.$watch(() => {
                return this.$state.$current.name;
            }, (newVal: any, oldVal: any) => {
                this.isOnBlogPage = $state.includes('fullblog');
            });
        }

        home = (): void => {
            this.$state.go('main');
        }

        incrementClickCount = (): void => {
            if(this.clickCount == 0){
                this.$timeout(this.countUp, 1000);
            }
            this.clickCount++;
            if(this.clickCount == 5){
                this.loginService.login();
                this.modalService.displayToast('Success', 'You\'re logged in.', 'success');
            }
        }

        countUp = (): void => {
            if(this.timeInMs == 3000){
                this.clickCount = 0;
                this.timeInMs = 0;
                this.$timeout.cancel(null);
            }else{
                this.timeInMs += 1000;
                this.$timeout(this.countUp, 1000);
            }
        }      

        scroll = (href: string): void => {
            $('html, body').stop().animate({
                scrollTop: ($(href).offset().top - 80)
            }, 1250, 'easeInOutExpo');
            //event.preventDefault();
        }  
    }

    angular.module('quinntenfuller').controller('MainController', MainController);
}
