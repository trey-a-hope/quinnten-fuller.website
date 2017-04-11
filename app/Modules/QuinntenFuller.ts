class QuinntenFuller{
    constructor(){
        angular.module('quinntenfuller', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            //http://tamerayd.in/ngToast/#
            'ngToast'
        ])
        //Config
        .config(['ngToastProvider', (ngToastProvider: any) => {
            ngToastProvider.configure({
                animation: 'fade' // or 'fade'
            });
        }])
        //Directive - Static Include - Used for ng-include to keep parent scope through templates.
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