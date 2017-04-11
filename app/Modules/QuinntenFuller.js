var QuinntenFuller = (function () {
    function QuinntenFuller() {
        angular.module('quinntenfuller', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            'ngToast'
        ])
            .config(['ngToastProvider', function (ngToastProvider) {
                ngToastProvider.configure({
                    animation: 'fade'
                });
            }])
            .directive('staticInclude', function ($http, $templateCache, $compile) {
            return function (scope, element, attrs) {
                var templatePath = attrs.staticInclude;
                $http.get(templatePath, { cache: $templateCache }).success(function (response) {
                    var contents = element.html(response).contents();
                    $compile(contents)(scope);
                });
            };
        });
    }
    return QuinntenFuller;
})();
new QuinntenFuller();
//# sourceMappingURL=QuinntenFuller.js.map