/**
 * Created by carolina on 07/05/15.
 */

$(document).ready(function(){

    $('.pause').click(function(){
        $('.bike').toggleClass("paused");
        $('.pause').toggleClass("active");
    });
});
