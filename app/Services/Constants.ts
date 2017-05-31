module App.Services {
    class Constants {
        static get Default(): any {
            return {
                COMPANY_EMAIL: 'quinnten@gointercommarketing.com',
                LINKEDIN_URL: 'www.linkedin.com/company/gointercommarketing',
                FACEBOOK_URL: 'https://www.facebook.com/gointercom/',
                TWITTER_URL: 'www.twitter.com/gointercom'
            }
        }
    }

    angular.module('quinntenfuller').constant('Constants', Constants.Default);
}