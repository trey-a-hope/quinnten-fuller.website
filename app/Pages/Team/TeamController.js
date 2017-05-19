var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Team;
        (function (Team) {
            var TeamController = (function () {
                function TeamController($modal, $http, myFirebaseRef, loginService, $scope, modalService) {
                    var _this = this;
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                    this.uploadImage = function () {
                        var fileChooser = document.getElementById('file-chooser');
                        var file = fileChooser.files[0];
                        if (file) {
                            var uploadTask = _this.myFirebaseRef.storageRef.child("TeamPage/ProfilePic").put(file);
                            uploadTask.on('state_changed', function (snapshot) {
                            }, function (error) {
                                _this.modalService.displayToast('Error', error, 'danger');
                            }, function (success) {
                                _this.modalService.displayToast('Success', 'Image uploaded.', 'success');
                                var downloadURL = uploadTask.snapshot.downloadURL;
                                _this.myFirebaseRef.teamDatabaseRef.child('ImageUrl').set(downloadURL);
                            });
                        }
                        else {
                            _this.modalService.displayToast('Error', 'Must select an image first.', 'danger');
                            ;
                        }
                    };
                    this.myFirebaseRef.teamDatabaseRef.child('ImageUrl').on('value', function (snapshot) {
                        _this.profileImageUrl = snapshot.val();
                        if (!_this.$scope.$$phase) {
                            _this.$scope.$apply();
                        }
                    });
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