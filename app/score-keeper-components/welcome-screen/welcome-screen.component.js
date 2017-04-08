/**
 * Created by sdikramanjian on 4/7/2017.
 */
(function(){
    'use strict';

    /**
     * Component that handles the Welcome screen for the app
     * @type {{templateUrl: string, controller: WelcomeScreenController}}
     */

    var WelcomeScreenConfiguration = {
        templateUrl: '../score-keeper-components/welcome-screen/welcome-screen.component.html',
        controller: WelcomeScreenController
    };

    function WelcomeScreenController(){

    }

    angular.module('myApp').component('welcomeScreen',WelcomeScreenConfiguration);

})();
