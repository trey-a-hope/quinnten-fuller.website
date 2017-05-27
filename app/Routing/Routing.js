var Routing;
(function (Routing) {
    var Route = (function () {
        function Route($stateProvider, $urlRouteProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouteProvider = $urlRouteProvider;
            this.$stateProvider = $stateProvider;
            this.$stateProvider.state('main', {
                url: '/',
                templateUrl: 'app/Main/MainTemplate.html'
            });
            this.$stateProvider.state('fullblog', {
                url: '/blog',
                templateUrl: 'app/Pages/Blogs/FullBlog.html',
                controller: 'FullBlogController',
                controllerAs: 'vm',
                params: {
                    blog: null
                }
            });
            this.$urlRouteProvider.otherwise('/');
        }
        return Route;
    }());
    Routing.Route = Route;
})(Routing || (Routing = {}));
angular.module('quinntenfuller').config(["$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
        return new Routing.Route($stateProvider, $urlRouterProvider);
    }]);
//# sourceMappingURL=Routing.js.map