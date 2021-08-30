$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    var $anchor = $(this);
    if (this.hash !== "") {
            var offset2 = -200;
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top + offset2
        }, 1000);
    }
});




$(document).ready(function() {
    
    var wC = document.documentElement.scrollTop;
    console.log('load scroll', wC)
    if (wC > 60) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    $(window).scroll(function() {
        var scroll = Math.floor($(window).scrollTop());
        if (scroll > 60) {
            $('.navbar').addClass('fixed-top');
            $('.navbar-nav>li>a').css({'height': '60px', 'line-height': '60px', 'transition': 'height 1s'})
            $('.navbar-search>a').css({'height': '60px', 'line-height': '60px', 'transition': 'height 1s'})
        } else {
            $('.navbar').removeClass('fixed-top');
            $('.navbar-nav>li>a').css({'height': '98px', 'line-height': '98px', 'transition': 'height 1s'})
            $('.navbar-search>a').css({'height': '98px', 'line-height': '98px', 'transition': 'height 1s'})
        }
    });


    $(".icon-search").on("click", function() {
        $(".form-search").css({ "display": "flex" });
        $('.navbar-nav').hide();
    });
    $(".icon-hide").on("click", function() {
       $(".form-search").css({ "display": "none" });
        $('.navbar-nav').show(); 
    })
    
    
});