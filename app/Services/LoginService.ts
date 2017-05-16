module App.Services {  
    export class LoginService {
        private loggedIn: boolean = false;
        constructor(){

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