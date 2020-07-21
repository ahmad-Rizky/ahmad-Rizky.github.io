$('document').ready(function () {

    $('.navbar-toggler').click(function () {
        $('.carousel-caption').toggle()
    })


    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

    /*--------------------------
        STICKY HEADER
    ----------------------------*/
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("nav").addClass("navblack");
        } else {
            $("nav").removeClass("navblack");
        }
    });

    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });

    $(window).scroll(function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".chat2");
        if ($totalHeight > 300) {
            $(".chat2").fadeIn();
        } else {
            $(".chat2").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.hide("slow");
        }
    });

    /*----------------------------
        GLIGHTBOX
    ------------------------------*/
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        onOpen: () => {
            console.log('Lightbox opened')
        },
        beforeSlideLoad: (slide, data) => {
            // Need to execute a script in the slide?
            // You can do that here...
        }
    });

    /*----------------------------
        OWL-CAROUSEL
    ------------------------------*/
    $(".owl-carousel").owlCarousel();

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 3
            },
        }
    });











})