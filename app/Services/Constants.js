var App;
(function (App) {
    var Services;
    (function (Services) {
        var Constants = (function () {
            function Constants() {
            }
            Object.defineProperty(Constants, "Default", {
                get: function () {
                    return {
                        COMPANY_EMAIL: 'quinnten@gointercommarketing.com',
                        LINKEDIN_URL: 'www.linkedin.com/company/gointercommarketing',
                        FACEBOOK_URL: 'https://www.facebook.com/gointercom/',
                        TWITTER_URL: 'www.twitter.com/gointercom'
                    };
                },
                enumerable: true,
                configurable: true
            });
            return Constants;
        }());
        angular.module('quinntenfuller').constant('Constants', Constants.Default);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=Constants.js.map