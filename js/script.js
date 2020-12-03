/*****Created by Asmaa Ebeed*****/
/*Toggle Mascot Divs */
$(document).ready(function(){
    $(".wrapper").height($(window).height());
    $(window).resize(function(){
        $(".wrapper").height($(window).height());
    })
    /*big circle animated */
    $('.icon-span').hover(function(){
        $(this).prev().addClass('top-left-circle-expand');
        //$(this).next().css({"display": "block"});
        $(this).next().animate({opacity: '1'}, 1100);
    }, function(){
        $(this).prev().removeClass('top-left-circle-expand');
        $(this).next().animate({opacity: '0'}, 100);
    });
    /*get item from out area*/
    $('.top-left-out').animate({
        left: '0',
        top: '0'
    }, 1100, function(){
        $('.top-right-out').animate({
            right: '0',
            top: '0'
        });
    });
    
});

