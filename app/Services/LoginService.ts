module App.Services {  
    import ModalService = Services.ModalService;

    export class LoginService {
        private loggedIn: boolean = false;
        
        static $inject = ['ModalService'];
        constructor(public modalService: ModalService){
            this.loggedIn ? this.modalService.displayToast('Dont Forget', 'Turn login service off after testing.', 'success') : 'f';
        }

        login = (): void => {
            this.loggedIn = true;
        }

        logout = (): void => {
            this.loggedIn = false;
        }

        isLoggedIn = (): boolean =>{
            return this.loggedIn;
        }
    }
    angular.module('quinntenfuller').service('LoginService', LoginService);
}