import $ from 'jquery';

var counter = 0;
var screenWidth = $(window).width();
var returnWidth = 5 * screenWidth;
console.log(screenWidth);

$(".player").click(function(event) {

    counter++;

    console.log(counter);

    if(counter > 4){

        $("#player-container").animate({scrollLeft: -returnWidth}, 800, "swing");
        counter = 0;

    } else {

        $("#player-container").animate({scrollLeft: counter * screenWidth}, 400);

    }

})
