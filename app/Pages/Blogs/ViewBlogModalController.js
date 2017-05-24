var App;
(function (App) {
    var Blogs;
    (function (Blogs) {
        var ViewBlogModalController = (function () {
            function ViewBlogModalController($scope, _index, _blogs) {
                var _this = this;
                this.$scope = $scope;
                this._index = _index;
                this._blogs = _blogs;
                this.close = function () {
                    _this.$scope.$dismiss(false);
                };
                this.share = function (provider) {
                    switch (provider) {
                        case 'TWITTER':
                            alert('Post to twitter...');
                            break;
                        case 'FACEBOOK':
                            alert('Post to facebook...');
                            break;
                        case 'LINKEDIN':
                            alert('Post to linkedin...');
                            break;
                        default:
                            break;
                    }
                };
                this.index = _index;
                this.blogs = _blogs;
            }
            ViewBlogModalController.$inject = ['$scope', 'index', 'blogs'];
            return ViewBlogModalController;
        })();
        angular.module('quinntenfuller').controller('ViewBlogModalController', ViewBlogModalController);
    })(Blogs = App.Blogs || (App.Blogs = {}));
})(App || (App = {}));
//# sourceMappingURL=ViewBlogModalController.js.map