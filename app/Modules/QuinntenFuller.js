var QuinntenFuller = (function () {
    function QuinntenFuller() {
        angular.module('quinntenfuller', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            'ngToast'
        ]).config(['ngToastProvider', function (ngToastProvider) {
                ngToastProvider.configure({
                    animation: 'fade'
                });
            }]);
    }
    return QuinntenFuller;
})();
new QuinntenFuller();
//# sourceMappingURL=QuinntenFuller.js.map