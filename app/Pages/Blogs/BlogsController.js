var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Blogs;
        (function (Blogs) {
            var Blog = App.Models.Blog;
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
                    this.openBlog = function (blog) {
                        var index = _this.blogs.indexOf(blog);
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
                    var b = new Blog();
                    b.title = "Trey Is Cooking";
                    b.subTitle = "When you think he couldn't get any better, he does!";
                    b.postDateTime = "2017-03-21T07:29:58";
                    b.html = "<h1>It takes a village...?</h1>";
                    b.coverImageUrl = "https://firebasestorage.googleapis.com/v0/b/firebase-camp-central.appspot.com/o/Images%2FCamps%2F-KDuUd4rxKA-rZF79uii?alt=media&token=f9daab05-2856-4aa4-ad1a-044cfb5b980e";
                    var a = new Blog();
                    a.title = "Google Is Finally Here";
                    a.subTitle = "How many fountain drinks do you want.";
                    a.postDateTime = "2017-05-24T07:29:58";
                    a.html = "<div class='row'><div class='col-xs-12'><h5>New Beginnings</h5><p>Sed nec nisi pellentesque, auctor urna eget, blandit massa. Aliquam consequat ex in convallis maximus. Donec eget urna vel erat vestibulum finibus in a nibh. Mauris ultrices quam lectus, non iaculis neque malesuada sed. Donec efficitur libero elit, et vestibulum mi congue eu. Praesent vitae porttitor ante, eget pellentesque erat. Maecenas erat est, ultricies at ultrices at, sodales vel lacus. Duis eu risus pulvinar, vehicula sapien sed, feugiat est.</p>" +
                        "<img class='col-xs-4' src='https://firebasestorage.googleapis.com/v0/b/intercom-78436.appspot.com/o/TeamPage%2FProfilePic?alt=media&token=4e8fd21f-d498-4b1e-a0f9-969711b19de4'></img></div></div>";
                    a.coverImageUrl = "https://firebasestorage.googleapis.com/v0/b/intercom-78436.appspot.com/o/TeamPage%2FProfilePic?alt=media&token=4e8fd21f-d498-4b1e-a0f9-969711b19de4";
                    this.blogs.push(b);
                    this.blogs.push(a);
                }
                BlogsController.$inject = ['$modal', '$http', 'MyFirebaseRef', 'LoginService', '$scope', 'ModalService'];
                return BlogsController;
            })();
            Blogs.BlogsController = BlogsController;
            angular.module('quinntenfuller').controller('BlogsController', BlogsController);
        })(Blogs = Pages.Blogs || (Pages.Blogs = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=BlogsController.js.map