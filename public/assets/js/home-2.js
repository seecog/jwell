
/* ---------------------------------------------
Preloader - Home page
 --------------------------------------------- */

jQuery(window).on('load', function() {
    "use strict";
    // will first fade out the loading animation
    jQuery("#status").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(500).fadeOut("slow");

})
