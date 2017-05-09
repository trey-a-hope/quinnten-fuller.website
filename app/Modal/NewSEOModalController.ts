module App.Modal {

    import Clientele = Models.Clientele;

    export class NewSEOModalController {

        static $inject = ['$modalInstance', '$q'];
        constructor(public $modalInstance: ng.ui.bootstrap.IModalServiceInstance, public $q: ng.IQService) { 
        }

        acknowledge = (): void => {
            this.$modalInstance.close();
        }

        cancel = (): void => {
            this.$modalInstance.dismiss();
        }
 
    }

    angular.module('quinntenfuller').controller('NewSEOModalController', NewSEOModalController);
}