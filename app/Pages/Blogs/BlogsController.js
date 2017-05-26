var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Blogs;
        (function (Blogs) {
            var BlogsController = (function () {
                function BlogsController($modal, $http, myFirebaseRef, loginService, $scope, modalService) {
                    var _this = this;
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                    this.blogs = new Array();
                    this.getBlogs = function () {
                        _this.blogs = [];
                        _this.myFirebaseRef.blogDatabaseRef.on('child_added', function (snapshot) {
                            _this.blogs.push(snapshot.val());
                            if (!_this.$scope.$$phase) {
                                _this.$scope.$apply();
                            }
                        });
                    };
                    this.viewBlog = function (blog, index) {
                        _this.$modal.open({
                            templateUrl: 'app/Pages/Blogs/ViewBlogModalTemplate.html',
                            controller: 'ViewBlogModalController as vm',
                            size: 'lg',
                            backdrop: 'static',
                            resolve: {
                                index: function () {
                                    return index;
                                },
                                blogs: function () {
                                    return _this.blogs;
                                }
                            }
                        });
                    };
                    this.addBlog = function () {
                        _this.$modal.open({
                            templateUrl: 'app/Pages/Blogs/AddEditBlogModalTemplate.html',
                            controller: 'AddEditBlogModalController as vm',
                            size: 'lg',
                            backdrop: 'static',
                            resolve: {
                                isEdit: function () {
                                    return false;
                                },
                                blog: function () {
                                    return null;
                                }
                            }
                        }).result.then(function () {
                            _this.modalService.displayToast('Blog Added', '', 'success');
                            _this.getBlogs();
                        });
                    };
                    this.editBlog = function (blog) {
                        _this.$modal.open({
                            templateUrl: 'app/Pages/Blogs/AddEditBlogModalTemplate.html',
                            controller: 'AddEditBlogModalController as vm',
                            size: 'lg',
                            backdrop: 'static',
                            resolve: {
                                isEdit: function () {
                                    return true;
                                },
                                blog: function () {
                                    return angular.copy(blog);
                                }
                            }
                        }).result.then(function () {
                            _this.modalService.displayToast('Blog Updated', '', 'success');
                            _this.getBlogs();
                        });
                    };
                    this.deleteBlog = function (blog) {
                        _this.modalService.displayConfirmation('Hit yes to confirm.', 'Delete Blog?', 'Yes')
                            .then(function () {
                            _this.myFirebaseRef.blogDatabaseRef.child(blog.id).remove();
                            _this.myFirebaseRef.storageRef.child('BlogPage/' + blog.id).delete()
                                .then(function (result) {
                                _this.modalService.displayToast('Blog Deleted', '', 'success');
                                _this.getBlogs();
                            })
                                .catch(function (error) { });
                        })
                            .catch(function () { });
                    };
                    this.getBlogs();
                }
                return BlogsController;
            }());
            BlogsController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
            Blogs.BlogsController = BlogsController;
            angular.module('quinntenfuller').controller('BlogsController', BlogsController);
        })(Blogs = Pages.Blogs || (Pages.Blogs = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=BlogsController.js.map