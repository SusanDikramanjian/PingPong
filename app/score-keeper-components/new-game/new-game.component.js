/**
 * Created by sdikramanjian on 4/7/2017.
 */
(function(){
    'use strict';

    /**
     * Component that handles the New Game screen for the app
     * @type {{templateUrl: string, controller: NewGameController}}
     */

    var NewGameConfiguration = {
        templateUrl: '../score-keeper-components/new-game/new-game.component.html',
        controller: NewGameController
    };

    NewGameController.$inject = ['PlayerService'];

    function NewGameController(PlayerService){
        var ctrl = this;

        ctrl.$onInit = function(){
            ctrl.firstPlayer = PlayerService.getNewPlayer();
            ctrl.secondPlayer = PlayerService.getNewPlayer();
            ctrl.gameInSession = false;
        };

        /**
         * A function that gets called when the 'Start Game' button gets clicked
         */
        ctrl.startGame = function(){
            ctrl.gameInSession = true;
        }

        /**
         * A function which gets called when each of the players clicks on their respective 'Score Point' button
         */
        ctrl.pointScored = function(player){
            if(player===1)
                ctrl.firstPlayer.currentScore+=1;
            else
                ctrl.secondPlayer.currentScore+=1;

            ctrl.winner = PlayerService.getWinner(ctrl.firstPlayer,ctrl.secondPlayer);
        }


    }

    angular.module('myApp').component('newGame',NewGameConfiguration);

})();