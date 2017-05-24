module App.Blogs {
    import Blog = App.Models.Blog;
    class ViewBlogModalController {
        public index: number;
        public blogs: Array<Blog>;

        static $inject = ['$scope', 'index', 'blogs'];
        constructor(public $scope: any, public _index: number, public _blogs: Array<Blog>) {
            this.index = _index;
            this.blogs = _blogs;
        }

        close = () => {
            this.$scope.$dismiss(false);
        }

        share = (provider: string): void => {
            switch(provider){
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
        }
    }

    angular.module('quinntenfuller').controller('ViewBlogModalController', ViewBlogModalController);
}
