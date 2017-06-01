module App.Services {
    class Constants {
        static get Default(): any {
            return {
                SEO_AUDIT_EMAIL: 'info@gointercommarketing.com',
                CONTACT_FORM_EMAIL: 'support@gointercommarketing.com',
                LINKEDIN_URL: 'https://www.linkedin.com/company/gointercommarketing',
                FACEBOOK_URL: 'https://www.facebook.com/gointercom/',
                TWITTER_URL: 'https://www.twitter.com/gointercom'
            }
        }
    }

    angular.module('quinntenfuller').constant('Constants', Constants.Default);
}