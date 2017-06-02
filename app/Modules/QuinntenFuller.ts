declare var firebase: any;
declare var FB: any;
declare var WOW: any;

class QuinntenFuller{
    constructor(){
        /* Firebase Initialization */
        var config: any = ({
            apiKey: "AIzaSyCdCVmXkEDI7PwRIMFRba6aA6_xiy0UhEU",
            authDomain: "intercom-78436.firebaseapp.com",
            databaseURL: "https://intercom-78436.firebaseio.com",
            projectId: "intercom-78436",
            storageBucket: "intercom-78436.appspot.com",
            messagingSenderId: "914715041488"
        });
        firebase.initializeApp(config);
        /* Moduel Setup */
        angular.module('quinntenfuller', [
            'ui.router',
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            'ngToast',
            '720kb.datepicker'
        ])
        /* Config */
        .config(['ngToastProvider', (ngToastProvider: any) => {
            ngToastProvider.configure({
                animation: 'fade' // or 'fade'
            });
        }])
        /* Directive - Static Include - Used for ng-include to keep parent scope through templates */
        .directive('staticInclude', ($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService) => {
            return (scope: ng.IScope, element: any, attrs: any): any => {
                var templatePath = attrs.staticInclude;
                $http.get(templatePath, { cache: $templateCache }).success((response: any) => {
                    var contents = element.html(response).contents();
                    $compile(contents)(scope);
                });
            };
        });
    }
}
new QuinntenFuller();