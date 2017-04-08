'use strict';

angular.module('myApp', ['ui.router','ngAnimate','ngMessages','ui.bootstrap'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('root', {
                abstract: true,
                template: '<ui-view/>',
            });

        $stateProvider
            .state('welcome', {
                parent: 'root',
                url: '/welcome',
                template: '<div><welcome-screen></welcome-screen></div>'
            });

        $stateProvider
            .state('new-game', {
                parent: 'root',
                url: '/new-game',
                template: '<div><new-game></new-game></div>'
            });
    }])
    .run(['$state', function ($state) {
        $state.go('welcome');
    }]);
