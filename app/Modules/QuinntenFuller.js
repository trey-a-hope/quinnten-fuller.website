var QuinntenFuller = (function () {
    function QuinntenFuller() {
        var config = ({
            apiKey: "AIzaSyCdCVmXkEDI7PwRIMFRba6aA6_xiy0UhEU",
            authDomain: "intercom-78436.firebaseapp.com",
            databaseURL: "https://intercom-78436.firebaseio.com",
            projectId: "intercom-78436",
            storageBucket: "intercom-78436.appspot.com",
            messagingSenderId: "914715041488"
        });
        firebase.initializeApp(config);
        angular.module('quinntenfuller', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            'ngToast',
            '720kb.datepicker'
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
}());
new QuinntenFuller();
//# sourceMappingURL=QuinntenFuller.js.map