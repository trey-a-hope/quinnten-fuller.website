class QuinntenFuller{
    constructor(){
        angular.module('quinntenfuller', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            //http://tamerayd.in/ngToast/#
            'ngToast'
        ]).config(['ngToastProvider', (ngToastProvider: any) => {
            ngToastProvider.configure({
                animation: 'fade' // or 'fade'
            });
        }]);
    }
}
new QuinntenFuller();