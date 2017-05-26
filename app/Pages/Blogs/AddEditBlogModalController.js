var App;
(function (App) {
    var Blogs;
    (function (Blogs) {
        var AddEditBlogModalController = (function () {
            function AddEditBlogModalController($modalInstance, isEdit, blog, modalService, myFirebaseRef) {
                var _this = this;
                this.$modalInstance = $modalInstance;
                this.isEdit = isEdit;
                this.blog = blog;
                this.modalService = modalService;
                this.myFirebaseRef = myFirebaseRef;
                this.attemptedSend = false;
                this.close = function () {
                    _this.$modalInstance.dismiss(false);
                };
                this.save = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        var fileChooser = document.getElementById('file-chooser-blog');
                        var file = fileChooser.files[0];
                        if (file) {
                            var newPostKey = _this.myFirebaseRef.blogDatabaseRef.push().key.toString();
                            _this.blog.id = newPostKey;
                            var uploadTask = _this.myFirebaseRef.storageRef.child("BlogPage/" + _this.blog.id).put(file);
                            uploadTask.on('state_changed', function (snapshot) {
                            }, function (error) {
                                _this.modalService.displayToast('Error', error, 'danger');
                            }, function (success) {
                                _this.blog.postDateTime = new Date().toDateString();
                                _this.blog.coverImageUrl = uploadTask.snapshot.downloadURL;
                                _this.myFirebaseRef.blogDatabaseRef.child(_this.blog.id).update(_this.blog);
                                _this.$modalInstance.close(true);
                            });
                        }
                        else {
                            _this.modalService.displayToast('Error', 'Must select a cover image for blog.', 'danger');
                            ;
                        }
                    }
                    else {
                        _this.modalService.displayToast('Error', 'There were errors in your submission.', 'danger');
                    }
                };
                this.update = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        var fileChooser = document.getElementById('file-chooser-blog');
                        var file = fileChooser.files[0];
                        if (file) {
                            var uploadTask = _this.myFirebaseRef.storageRef.child("BlogPage/" + _this.blog.id).put(file);
                            uploadTask.on('state_changed', function (snapshot) {
                            }, function (error) {
                                _this.modalService.displayToast('Error', error, 'danger');
                            }, function (success) {
                                _this.blog.coverImageUrl = uploadTask.snapshot.downloadURL;
                                _this.myFirebaseRef.blogDatabaseRef.child(_this.blog.id).update(_this.blog);
                                _this.$modalInstance.close(true);
                            });
                        }
                        else {
                            _this.myFirebaseRef.blogDatabaseRef.child(_this.blog.id).update(_this.blog);
                            _this.$modalInstance.close(true);
                        }
                    }
                    else {
                        _this.modalService.displayToast('Error', 'There were errors in your submission.', 'danger');
                    }
                };
            }
            return AddEditBlogModalController;
        }());
        AddEditBlogModalController.$inject = ['$modalInstance', 'isEdit', 'blog', 'ModalService', 'MyFirebaseRef'];
        angular.module('quinntenfuller').controller('AddEditBlogModalController', AddEditBlogModalController);
    })(Blogs = App.Blogs || (App.Blogs = {}));
})(App || (App = {}));
//# sourceMappingURL=AddEditBlogModalController.js.map