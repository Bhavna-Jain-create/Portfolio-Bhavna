$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $('#section-header'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) {sticky.addClass('fixed-header');
    }
        else {sticky.removeClass('fixed-header');
    }
      });

    $("body main").prepend("<div class='scroll-btn scroll-to-target' data-target='html'></div>");

    $('.scroll-btn.scroll-to-target').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    }); 

    $("#section-header .auto-container .header-deat").append("<div class='mobile-menu'></div>");

    $("ul.navigate.clearfix").clone().appendTo("#section-header .mobile-menu");

    $("#section-header .mobile-menu").prepend("<div class='menu-backdrop'></div>");
    
    $("ul.navigate.clearfix").wrap("<div class='menu-box'></div>");

    $("#section-header .mobile-menu").prepend("<div class='mobile-font-toggle'></div>");

    $("#section-header .mobile-font-toggle").click(function(){
        $("#section-header .menu-backdrop, #section-header .menu-box").addClass("showable")
    })

    $("#section-header .menu-box").append("<div class='close'></div>");

    $("#section-header .menu-box .close, #section-header .menu-box li a").click(function(){
        $("#section-header .menu-backdrop, #section-header .menu-box").removeClass("showable");
    })

});