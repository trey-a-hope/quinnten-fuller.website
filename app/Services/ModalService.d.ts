declare module App.Services {
    class ModalService {
        $modal: ng.ui.bootstrap.IModalService;
        $q: ng.IQService;
        ngToast: any;
        toastTypes: string[];
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $q: ng.IQService, ngToast: any);
        displayToast: (title: string, subTitle: string, toastType: string) => void;
        displayConfirmation: (confirmationMessage: string, confirmationHeader: string, confirmButtonText: string) => ng.IPromise<boolean>;
    }
}
