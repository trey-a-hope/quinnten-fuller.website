var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Team;
        (function (Team) {
            var TeamController = (function () {
                function TeamController($modal, $http, myFirebaseRef, loginService, $scope, modalService) {
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                }
                TeamController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
                return TeamController;
            })();
            Team.TeamController = TeamController;
            angular.module('quinntenfuller').controller('TeamController', TeamController);
        })(Team = Pages.Team || (Pages.Team = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=TeamController.js.map