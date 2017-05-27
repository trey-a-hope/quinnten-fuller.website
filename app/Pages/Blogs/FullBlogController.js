var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Blogs;
        (function (Blogs) {
            var FullBlogController = (function () {
                function FullBlogController($modal, $http, myFirebaseRef, loginService, $scope, modalService, $state, $location) {
                    var _this = this;
                    this.$modal = $modal;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.loginService = loginService;
                    this.$scope = $scope;
                    this.modalService = modalService;
                    this.$state = $state;
                    this.$location = $location;
                    this.blog = null;
                    this.back = function () {
                        _this.$state.go('main');
                    };
                    this.share = function (provider) {
                        var url = _this.$location.absUrl();
                        console.log(url);
                        switch (provider) {
                            case 'TWITTER':
                                alert('Share link \'' + url + '\' to Twitter');
                                break;
                            case 'FACEBOOK':
                                alert('Share link \'' + url + '\' to Twitter');
                                break;
                            case 'LINKEDIN':
                                alert('Share link \'' + url + '\' to Twitter');
                                break;
                            default:
                                break;
                        }
                    };
                    if (this.$state.params.blog == null) {
                        var blogId = $location.search().id;
                        this.myFirebaseRef.blogDatabaseRef.child(blogId).on('value', function (snapshot) {
                            _this.blog = snapshot.val();
                            if (!_this.$scope.$$phase) {
                                _this.$scope.$apply();
                            }
                        });
                    }
                    else {
                        this.blog = this.$state.params.blog;
                        $location.search('id', this.blog.id);
                    }
                }
                return FullBlogController;
            }());
            FullBlogController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService', '$state', '$location'];
            Blogs.FullBlogController = FullBlogController;
            angular.module('quinntenfuller').controller('FullBlogController', FullBlogController);
        })(Blogs = Pages.Blogs || (Pages.Blogs = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=FullBlogController.js.map