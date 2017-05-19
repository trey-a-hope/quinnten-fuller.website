declare module App.Services {
    import ModalService = Services.ModalService;
    class LoginService {
        modalService: ModalService;
        private loggedIn;
        static $inject: string[];
        constructor(modalService: ModalService);
        login: () => void;
        logout: () => void;
        isLoggedIn: () => boolean;
    }
}
