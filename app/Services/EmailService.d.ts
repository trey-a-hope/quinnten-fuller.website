declare module App.Services {
    class EmailService {
        private $http;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        sendEmail: (to: string, subject: string, body: string) => ng.IPromise<any>;
    }
}
