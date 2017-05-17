module App.Services {

    export class EmailService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {
        }

        sendEmail = (to: string, subject: string, body: string): ng.IPromise<any> => {
            return this.$http({
                method: 'POST',
                url: 'php/sendEmail.php',
                data: {
                    to: to,
                    subject: subject,
                    body: body
                },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        }

    }


    angular.module('quinntenfuller').service('EmailService', EmailService);
}