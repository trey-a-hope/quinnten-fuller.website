var App;
(function (App) {
    var Blogs;
    (function (Blogs) {
        var ViewBlogModalController = (function () {
            function ViewBlogModalController($scope, index, blogs) {
                var _this = this;
                this.$scope = $scope;
                this.index = index;
                this.blogs = blogs;
                this.close = function () {
                    _this.$scope.$dismiss(false);
                };
                this.next = function () {
                    _this.index++;
                };
                this.previous = function () {
                    _this.index--;
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
            }
            return ViewBlogModalController;
        }());
        ViewBlogModalController.$inject = ['$scope', 'index', 'blogs'];
        angular.module('quinntenfuller').controller('ViewBlogModalController', ViewBlogModalController);
    })(Blogs = App.Blogs || (App.Blogs = {}));
})(App || (App = {}));
//# sourceMappingURL=ViewBlogModalController.js.map