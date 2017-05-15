declare module App.Services {
    class MyFirebaseRef {
        $scope: any;
        private databaseRef;
        private campsDatabaseRef;
        private highschoolsDatabaseRef;
        private usersDatabaseRef;
        private videosDatabaseRef;
        private resourcesDatabaseRef;
        private storageRef;
        static $inject: string[];
        constructor($scope: any);
    }
}
