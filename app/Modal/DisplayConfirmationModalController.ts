module App.Modal {
    class DisplayConfirmationModalController {

        static $inject = ['$scope', 'confirmationMessage', 'confirmationHeader', 'confirmButtonText', 'deferred'];
        constructor(public $scope: any, public confirmationMessage: string, public confirmationHeader: string, public confirmButtonText: string, public deferred: any) {
        }

        confirm = () => {
            this.deferred.resolve();
            this.$scope.$close(true);
        }

        cancel = () => {
            this.deferred.reject();
            this.$scope.$dismiss(false);
        }
    }

    angular.module('quinntenfuller').controller('DisplayConfirmationModalController', DisplayConfirmationModalController);
}
