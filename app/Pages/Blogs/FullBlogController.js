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
                        var text = 'Check out this blog I found on Intercom.com; \"' + _this.blog.title + '\"';
                        console.log(url);
                        switch (provider) {
                            case 'TWITTER':
                                window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                                break;
                            case 'FACEBOOK':
                                window.open('http://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(_this.blog.title) + '&description=' + encodeURIComponent('Check out this blog I found on Intercom.com'), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                                break;
                            case 'LINKEDIN':
                                window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
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
                    window.scrollTo(0, 0);
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