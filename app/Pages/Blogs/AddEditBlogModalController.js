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
                    var newPostKey = _this.myFirebaseRef.blogDatabaseRef.push().key.toString();
                    _this.blog.id = newPostKey;
                    _this.blog.postDateTime = new Date().toDateString();
                    _this.myFirebaseRef.blogDatabaseRef.child(newPostKey).update(_this.blog);
                    _this.$modalInstance.close(true);
                };
                this.update = function () {
                    _this.$modalInstance.close(true);
                };
            }
            return AddEditBlogModalController;
        }());
        AddEditBlogModalController.$inject = ['$modalInstance', 'isEdit', 'blog', 'ModalService', 'MyFirebaseRef'];
        angular.module('quinntenfuller').controller('AddEditBlogModalController', AddEditBlogModalController);
    })(Blogs = App.Blogs || (App.Blogs = {}));
})(App || (App = {}));
//# sourceMappingURL=AddEditBlogModalController.js.map