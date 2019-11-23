/* ---------------------------------------------
Top-search - All pages Header
 --------------------------------------------- */
new UISearch(document.getElementById('sb-search'));
"use strict";
$(".nav_trigger").on('click', function() {
    $("body").toggleClass("show_sidebar");
    $(".nav_trigger .fa").toggleClass("fa-navicon fa-times"); 
});

