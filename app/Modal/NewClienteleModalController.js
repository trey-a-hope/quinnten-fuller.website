var App;
(function (App) {
    var Modal;
    (function (Modal) {
        var Clientele = App.Models.Clientele;
        var NewClienteleModalController = (function () {
            function NewClienteleModalController($modalInstance, $q, modalService, myFirebaseRef, isEdit, _clientele) {
                var _this = this;
                this.$modalInstance = $modalInstance;
                this.$q = $q;
                this.modalService = modalService;
                this.myFirebaseRef = myFirebaseRef;
                this.isEdit = isEdit;
                this._clientele = _clientele;
                this.clientele = new Clientele();
                this.attemptedSend = false;
                this.update = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        var fileChooser = document.getElementById('file-chooser-clientele');
                        var file = fileChooser.files[0];
                        if (file) {
                            var uploadTask = _this.myFirebaseRef.storageRef.child("ClientelePage/" + _this.clientele.id).put(file);
                            uploadTask.on('state_changed', function (snapshot) {
                            }, function (error) {
                                _this.modalService.displayToast('Error', error, 'danger');
                            }, function (success) {
                                _this.clientele.imageDownloadUrl = uploadTask.snapshot.downloadURL;
                                _this.myFirebaseRef.clienteleDatabaseRef.child(_this.clientele.id).update(_this.clientele);
                                _this.modalService.displayToast('Success', 'Updated clientele.', 'success');
                                _this.$modalInstance.close();
                            });
                        }
                        else {
                            _this.myFirebaseRef.clienteleDatabaseRef.child(_this.clientele.id).update(_this.clientele);
                            _this.$modalInstance.close();
                            _this.modalService.displayToast('Success', 'Updated clientele.', 'success');
                        }
                    }
                    else {
                        _this.modalService.displayToast('Sorry', 'There were errors in your submission.', 'danger');
                    }
                };
                this.submit = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        var fileChooser = document.getElementById('file-chooser-clientele');
                        var file = fileChooser.files[0];
                        if (file) {
                            var newPostKey = _this.myFirebaseRef.clienteleDatabaseRef.push().key.toString();
                            _this.clientele.id = newPostKey;
                            var uploadTask = _this.myFirebaseRef.storageRef.child("ClientelePage/" + _this.clientele.id).put(file);
                            uploadTask.on('state_changed', function (snapshot) {
                            }, function (error) {
                                _this.modalService.displayToast('Error', error, 'danger');
                            }, function (success) {
                                _this.clientele.imageDownloadUrl = uploadTask.snapshot.downloadURL;
                                _this.myFirebaseRef.clienteleDatabaseRef.child(newPostKey.toString()).update(_this.clientele);
                                _this.modalService.displayToast('Success', 'Added new clientele.', 'success');
                                _this.$modalInstance.close();
                            });
                        }
                        else {
                            _this.modalService.displayToast('Error', 'Must select an image for this client.', 'danger');
                            ;
                        }
                    }
                    else {
                        _this.modalService.displayToast('Sorry', 'There were errors in your submission.', 'danger');
                    }
                };
                this.cancel = function () {
                    _this.$modalInstance.dismiss();
                };
                if (this.isEdit) {
                    this.clientele = _clientele;
                }
            }
            return NewClienteleModalController;
        }());
        NewClienteleModalController.$inject = ['$modalInstance', '$q', 'ModalService', 'MyFirebaseRef', 'isEdit', 'clientele'];
        Modal.NewClienteleModalController = NewClienteleModalController;
        angular.module('quinntenfuller').controller('NewClienteleModalController', NewClienteleModalController);
    })(Modal = App.Modal || (App.Modal = {}));
})(App || (App = {}));
//# sourceMappingURL=NewClienteleModalController.js.map