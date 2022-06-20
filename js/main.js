$(function(){
 
    $('.bike-slider, .slider__items').slick({
        arrows:false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true
    });

    $(".menu, .bike__column").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop:top}, 500);
    });

});