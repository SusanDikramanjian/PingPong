/**
 * Created by sdikramanjian on 4/8/2017.
 */
describe('PlayerService', function() {
    "use strict";

    var playerService;

   beforeEach(module('myApp'));

   beforeEach(inject(function($injector) {
        playerService = $injector.get('PlayerService');
    }));


    /**
     * First player score = 11, second player score= 8
     */
    it('First Player Should win',function(){
        var firstPlayer = {currentScore:11};
        var secondPlayer = {currentScore:8};

        var winner = playerService.getWinner(firstPlayer,secondPlayer);
        expect(winner).toBe(firstPlayer);
    });


    /**
     * First player score = 11, second player score= 10
     */
    it('Nobody should be the winner',function(){
        var firstPlayer = {currentScore:11};
        var secondPlayer = {currentScore:10};

        var winner = playerService.getWinner(firstPlayer,secondPlayer);
        expect(winner).toBe(null);
    });


    /**
     * First player score = 12, second player score= 14
     */
    it('Second Player should be the winner',function(){
        var firstPlayer = {currentScore:12};
        var secondPlayer = {currentScore:14};

        var winner = playerService.getWinner(firstPlayer,secondPlayer);
        expect(winner).toBe(secondPlayer);
    });
});
