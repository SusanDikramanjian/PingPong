/**
 * Created by susandikramanjian on 5/18/17.
 */
(function(){
    'use strict';

    /**
     * Component that displays a stop watch type of control and counts the minutes and the seconds.
     * @type {{templateUrl: string, controller: StopWatchController}}
     */
    var StopWatchConfiguration = {
      templateUrl:'../score-keeper-components/stop-watch/stop-watch.component.html',
      controller:StopWatchController,
      bindings:{
          stopWatchApi:'='
      }
    };

    StopWatchController.$inject = ['$interval'];

    function StopWatchController($interval){
        var ctrl = this;

        ctrl.$onInit = function(){

            ctrl.running = false;
            ctrl.startTime = null;
            ctrl.interval = null;
            ctrl.elapsedTime = 0;

            if(ctrl.stopWatchApi){
                ctrl.stopWatchApi.startTimer = ctrl.startTimer;
                ctrl.stopWatchApi.stopTimer  = ctrl.stopTimer;
                ctrl.stopWatchApi.getElapsedTime = ctrl.getElapsedTime;
            }

        };

        /* public functions */


        /**
         * @name startTimer
         * @description
         * This function starts the timer
         */
        ctrl.startTimer = function() {

            if(!ctrl.running) {
                ctrl.startTime = new Date().getTime();
                ctrl.interval = $interval(_updateTime,100);
                ctrl.running = true;
            }

        };

        /**
         * @name stopTimer
         * @description
         * This function stops the timer
         */
        ctrl.stopTimer = function() {
            if(ctrl.running){
                _updateTime();
                $interval.cancel(ctrl.interval);
                ctrl.running = false;
            }
        };

        /**
         * @name getElapsedTime
         * @description
         * Returns the elapsed time
         */
        ctrl.getElapsedTime = function() {
            return ctrl.elapsedTime;
        }

        /* private functions */

        /**
         * @name _updateTime
         * @description
         * Calculates the elapsed time since the timer was started and updates the elapsed time property
         */
        function _updateTime(){
            var currentTime = new Date().getTime();
            var timeElapsed = (currentTime - ctrl.startTime);
            ctrl.elapsedTime = timeElapsed;
        }

    }

   angular.module('myApp').component('stopWatch',StopWatchConfiguration);




})();