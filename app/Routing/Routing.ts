module Routing {
    export class Route {

        constructor(public $stateProvider: ng.ui.IStateProvider, public $urlRouteProvider: ng.ui.IUrlRouterProvider) {
            this.$stateProvider = $stateProvider;

            /* Main Page */
            this.$stateProvider.state('main', {
                url:            '/',
                templateUrl:    'app/Main/MainTemplate.html'
                // controller:     'MainController',
                // controllerAs:   'vm'
            });

            /* Full Blog Page */
            this.$stateProvider.state('fullblog', {
                url:            '/blog/{path:.*}',
                templateUrl:    'app/Pages/Blogs/FullBlog.html',
                controller:     'FullBlogController',
                controllerAs:   'vm',
                params: {
                    blog: null
                }
            });

            this.$urlRouteProvider.otherwise('/');
        }
    }
}

angular.module('quinntenfuller').config(
    ["$stateProvider", "$urlRouterProvider",
        function($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            return new Routing.Route($stateProvider, $urlRouterProvider);
        }]
    );