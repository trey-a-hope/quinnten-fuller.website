module App.Services {
    declare var firebase: any;
    export class MyFirebaseRef {
        private config: any = ({
            apiKey: "AIzaSyCdCVmXkEDI7PwRIMFRba6aA6_xiy0UhEU",
            authDomain: "intercom-78436.firebaseapp.com",
            databaseURL: "https://intercom-78436.firebaseio.com",
            storageBucket: "intercom-78436.appspot.com",
        });
        private firebase: any;       
        private databaseRef: Firebase;
        public clienteleDatabaseRef: Firebase;
        public storageRef: Firebase;

        constructor() {
            firebase.apps.length === 0 ? this.firebase = firebase.initializeApp(this.config) : this.firebase = firebase.apps[0];
            this.databaseRef = this.firebase.database().ref();
            this.clienteleDatabaseRef = this.databaseRef.child('Clientele');
            this.storageRef = this.firebase.storage().ref();   
         }
    }

    angular.module('quinntenfuller').service('MyFirebaseRef', MyFirebaseRef);
}