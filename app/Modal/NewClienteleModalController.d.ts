declare module App.Modal {
    import Clientele = Models.Clientele;
    import ModalService = Services.ModalService;
    import MyFirebaseRef = Services.MyFirebaseRef;
    class NewClienteleModalController {
        $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        $q: ng.IQService;
        modalService: ModalService;
        myFirebaseRef: MyFirebaseRef;
        clientele: Clientele;
        attemptedSend: boolean;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $q: ng.IQService, modalService: ModalService, myFirebaseRef: MyFirebaseRef);
        submit: (form: any) => void;
        cancel: () => void;
    }
}
