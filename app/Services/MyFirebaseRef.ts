module App.Services {
    export class MyFirebaseRef {
        /* TODO: ADD FIREBASE.D.TS FILE, TYPE OF FIREBASE */
        private databaseRef: any;
        private campsDatabaseRef: any;
        private highschoolsDatabaseRef: any;
        private usersDatabaseRef: any;
        private videosDatabaseRef: any;
        private resourcesDatabaseRef: any;
        private storageRef: any;
        static $inject = ['$scope'];
        constructor(public $scope: any) {
            this.databaseRef = firebase.database().ref();
            /* TODO: FINISHE INITIALIZATION */
         }
    }

    angular.module('quinntenfuller').service('MyFirebaseRef', MyFirebaseRef);
}