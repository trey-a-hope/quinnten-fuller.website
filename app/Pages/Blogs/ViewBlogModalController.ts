module App.Blogs {
    import Blog = App.Models.Blog;
    class ViewBlogModalController {

        static $inject = ['$scope', 'index', 'blogs'];
        constructor(public $scope: any, public index: number, public blogs: Array<Blog>) {
        }

        close = () => {
            this.$scope.$dismiss(false);
        }

        next = (): void => {
            this.index++;
        }

        previous = (): void => {
            this.index--;
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
