// ----navbar header ------
$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');

        // ------scroll header starts------
        if($(window).scrollTop() > 10){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
        // ------scroll header ends------


        // ------magnific popup facility ends------
        $('.facility').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery:{
                enabled: true,
            }
        });
        // ------magnific popup facility  starts------

    });
});