/**
 * Created by sdikramanjian on 4/7/2017.
 */
(function(ng){

    'use strict';

    function PlayerService(){

        return {
            getNewPlayer:_getNewPlayer,
            getWinner: _getWinner
        };

        /**
         * @name getWinner
         * @description returns the winner if any , else returns null.
         * The first winner to reach at least 11 points with a 2 point margin wins the game.
         * @param player1 {object} the first player
         * @param player2 {object} the second player
         * @returns {object} the winner or null
         * @private
         */
        function _getWinner(player1,player2){
            var winner = null;

            if(player1.currentScore >= 11 && player1.currentScore > player2.currentScore && player2.currentScore + 2 <= player1.currentScore)
                winner = player1;
            else if(player2.currentScore >= 11 && player2.currentScore > player1.currentScore && player1.currentScore + 2 <= player2.currentScore)
                winner = player2;

            return winner;
        }

        /**
         * @name getNewPlayer
         * @description returns a new player withinitialized values
         * @returns {object} a new player
         * @private
         */
        function _getNewPlayer(){
           var player = {
               name:null,
               currentScore:0
           };

           return player

        }

    }

    ng.module('myApp').factory('PlayerService',PlayerService);

})(angular);
