/* 
 Project - Learn Education Template
 */

$(document).ready(function () {

    //animated scroll menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('nav').addClass('scrolled');
        }
        if (scroll <= 0) {
            $('nav').removeClass('scrolled');
        }
    });
    
    //Auto Close Responsive Navbar on Click
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

//smooth scroll
    $(function () {
        $('.smooth-scroll a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600);
                    return false;
                }
            }
        });
    });
    //preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    //parallax
    $.stellar();

//main text rotate
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: false
    });
//testi slider
    $('.testi-slider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false
    });
    
  //wow animations
    var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 100, // distance to the element when triggering the animation (default is 0)
                mobile: false        // trigger animations on mobile devices (true is default)
            }
    );
    wow.init();   
});
