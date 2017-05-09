module App.Services {
    export class ModalService {
        toastTypes = ['success', 'info', 'warning', 'danger'];

        static $inject = ['$modal', '$q', 'ngToast'];
        constructor(public $modal: ng.ui.bootstrap.IModalService, public $q: ng.IQService, public ngToast: any) { }
 
        displayToast = (title: string, subTitle: string, toastType: string): void =>{
            if(this.toastTypes.indexOf(toastType) < 0){
                alert("Wrong toast type being passed in.");
                return;
            }
            this.ngToast.create({
                className: toastType,
                content: '<strong>' + title + '</strong>' + ' ' +  subTitle
            });
        }
    }

    angular.module('quinntenfuller').service('ModalService', ModalService);
}