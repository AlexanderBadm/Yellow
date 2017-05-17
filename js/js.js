/**
 * Created by Александр on 19.03.2017.
 */
$(document).ready(function(){
    $("#about-list-toogle").click(function(){
        $("#header-nav").toggle(500);
    });
});



jQuery(document).ready(function($){
    $nav = $(".about-header-inner" );
    $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function(){
        if ( $window.scrollTop() > $h) {
            $nav.addClass("header_fixed");
        }else{
            $nav.removeClass("header_fixed");
        }
    });
});



