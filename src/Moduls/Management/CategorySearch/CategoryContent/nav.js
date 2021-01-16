var $ = require("jquery");
// var count = 0;
// if (count === 0) {
//     window.location.reload();
//     count++;

// }

$(document).ready(function () {
    $(".nav_again").click(function () {
        $(".buyagain").css("display", "block");
        $(".orders").css("display", "none");
        $(".cancel").css("display", "none");
        $(".return").css("display", "none");
        $(".nav_order").css("border-bottom", "2px solid gray");
        $(".nav_cancel").css("border-bottom", "2px solid gray");
        $(".nav_returned").css("border-bottom", "2px solid gray");
        $(".nav_again").css("border-bottom", "2px solid orange");
    })
    $(".nav_cancel").click(function () {
        $(".buyagain").css("display", "none");
        $(".orders").css("display", "none");
        $(".cancel").css("display", "block");
        $(".return").css("display", "none");
        $(".nav_order").css("border-bottom", "2px solid gray");
        $(".nav_cancel").css("border-bottom", "2px solid orange");
        $(".nav_returned").css("border-bottom", "2px solid gray");
        $(".nav_again").css("border-bottom", "2px solid gray");
    })
    $(".nav_returned").click(function () {
        $(".buyagain").css("display", "none");
        $(".orders").css("display", "none");
        $(".cancel").css("display", "none");
        $(".return").css("display", "block");
        $(".nav_order").css("border-bottom", "2px solid gray");
        $(".nav_cancel").css("border-bottom", "2px solid gray");
        $(".nav_returned").css("border-bottom", "2px solid orange");
        $(".nav_again").css("border-bottom", "2px solid gray");
    })
    $(".nav_order").click(function () {
        $(".buyagain").css("display", "none");
        $(".orders").css("display", "block");
        $(".cancel").css("display", "none");
        $(".return").css("display", "none");
        $(".nav_order").css("border-bottom", "2px solid orange");
        $(".nav_cancel").css("border-bottom", "2px solid gray");
        $(".nav_returned").css("border-bottom", "2px solid gray");
        $(".nav_again").css("border-bottom", "2px solid gray");
    })
    
});
