declare module App.Modal {
    class NewSEOModalController {
        $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        $q: ng.IQService;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $q: ng.IQService);
        acknowledge: () => void;
        cancel: () => void;
    }
}
