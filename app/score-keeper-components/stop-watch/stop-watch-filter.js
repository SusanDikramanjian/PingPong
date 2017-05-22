/**
 * Created by susandikramanjian on 5/21/17.
 */

/**
 * A Filter that formats the stop watch time into minutes and secons.
 * No hours are listed as a typical game continues only a few minutes so
 * the hours will be unnecessary and cluttery
 */
angular.module('myApp').filter('pingPongStopWatch', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; }

        var _date = new Date(input);
        var minutesText = _date.getMinutes() === 1 ? ' minute' : ' minutes';
        var secondsText = _date.getSeconds() === 1 ? ' second' : ' seconds';


        return _date.getMinutes() + minutesText + ' and ' + _date.getSeconds() + secondsText;

    };
});