var MINIMALDOG = MINIMALDOG || {};

(function($) {
    // USE STRICT
    "use strict";

    var $window = $(window);
    var $document = $(document);

    MINIMALDOG.documentOnScroll = {

        init: function() {
            MINIMALDOG.documentOnScroll.animation_nav();
            MINIMALDOG.documentOnScroll.back_top();
        },
        animation_nav: function() {
            var srcNav = $("#header .header-main");
            if ($(window).scrollTop() > 40) {
                srcNav.addClass("fixed-menu");
            } else {
                srcNav.removeClass("fixed-menu");
            }
        },
        back_top: function() {
            let backTopPosition = $(".js-back-top");
            if ($(window).scrollTop() > 100) {
                backTopPosition.addClass("active");
            } else {
                backTopPosition.removeClass("active");
            }
        },
    };

    MINIMALDOG.documentOnResize = {

    };

    MINIMALDOG.documentOnReady = {
        init: function() {
            MINIMALDOG.documentOnReady.carousel_1i();
            MINIMALDOG.documentOnReady.carousel_3i();
            MINIMALDOG.documentOnReady.carousel_3i_custom();
            MINIMALDOG.documentOnReady.carousel_4i_custom();
            MINIMALDOG.documentOnReady.carousel_sync();
            MINIMALDOG.documentOnReady.nav_accordion();
            MINIMALDOG.documentOnReady.back_top();
            MINIMALDOG.documentOnReady.aos_animation();
            MINIMALDOG.documentOnReady.scroll_target();
            MINIMALDOG.documentOnReady.reset_input();

        },
        carousel_1i: function() {
            var $carousels = $('.js-ldgroup-carousel-1i');
            $carousels.each(function() {
                $(this).owlCarousel({
                    margin: 0,
                    nav: true,
                    dots: false,
                    loop: true,
                    smartSpeed: 600,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    items: 1,
                    animateOut: 'fadeOut',
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>',
                    ],
                    autoHeight: true,
                });
            })
        },
        carousel_3i: function() {
            var $carousels = $('.js-ldgroup-carousel-3i');
            $carousels.each(function() {
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    margin: carousel_margin,
                    nav: false,
                    dots: false,
                    loop: true,
                    smartSpeed: 600,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    items: 3,
                    animateOut: 'fadeOut',
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>',
                    ],
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        }
                    }
                });
            })
        },
        carousel_3i_custom: function() {
            var $carousels = $('.js-ldgroup-carousel-3i-custom');
            $carousels.each(function() {
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    nav: true,
                    dots: false,
                    loop: carousel_loop,
                    smartSpeed: 600,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    margin: carousel_margin,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>',
                    ],
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        }
                    }
                });
            })
        },
        carousel_4i_custom: function() {
            var $carousels = $('.js-ldgroup-carousel-4i-custom');
            $carousels.each(function() {
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    nav: true,
                    dots: false,
                    loop: carousel_loop,
                    smartSpeed: 600,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    margin: carousel_margin,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>',
                    ],
                    responsive: {
                        0: {
                            items: 1,
                        },
                        360: {
                            items: 2,
                        },
                        501: {
                            items: 3,
                        },
                        768: {
                            items: 4,
                        }
                    }
                });
            })
        },
        nav_accordion: function() {
            let toggleBtnInit = $(".js-nav-accordion .nav-has-children > .nav-link > .nav-link-toggle");

            $(".js-nav-accordion .nav-has-children > .sub-menu").slideUp();

            toggleBtnInit.click(function(e) {
                e.preventDefault();
                let toggleBtnCurrent = $(this);
                let contentSubCurrent = toggleBtnCurrent.parent().next();

                let contentSubList = toggleBtnCurrent.closest(".nav-has-children").parent().find(".sub-menu");
                let toggleBtnList = toggleBtnCurrent.closest(".nav-has-children").parent().find(".nav-link > .nav-link-toggle")

                let toggleTemp;

                toggleBtnList.map(function(index, ele) {
                    if (ele.classList.contains('active')) {
                        toggleTemp = ele;
                    }
                })

                toggleBtnList.removeClass("active");
                contentSubList.slideUp();

                if (toggleTemp != toggleBtnCurrent[0]) {
                    toggleBtnCurrent.addClass("active");
                    contentSubCurrent.slideDown();
                }
            })

        },
        back_top: function() {
            $(".js-back-top").on("click", function() {
                $("html,body").stop(true).animate({ scrollTop: 0 }, 400);
                return false;
            });
        },
        carousel_sync: function() {
            var $sync1 = $(".js-ldgroup-carousel-1i-custom"),
                $sync2 = $(".js-ldgroup-carousel-auto-width"),
                flag = false,
                duration = 300;

            $sync1
                .owlCarousel({
                    items: 1,
                    margin: 10,
                    nav: false,
                    dots: false,
                    loop: false,
                    center: true,
                })
                .on('changed.owl.carousel', function(e) {
                    if (!flag) {
                        flag = true;
                        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });
            $sync2
                .owlCarousel({
                    margin: 15,
                    nav: false,
                    dots: false,
                    center: true,
                    loop: false,
                    responsive: {
                        0: {
                            items: 4,
                        },
                        421: {
                            items: 5,
                        },
                        768: {
                            items: 10,
                        },
                        992: {
                            items: 5,
                        },
                        1200: {
                            items: 6,
                        },
                    }
                })
                .on('click', '.owl-item', function() {
                    $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

                })
                .on('changed.owl.carousel', function(e) {
                    if (!flag) {
                        flag = true;
                        $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

        },
        aos_animation: function() {
            try {
                AOS.init();
            } catch (error) {

            }
        },
        scroll_target: function() {
            $(".js-scroll-target").click(function(e) {
                e.preventDefault();
                let $this = $(this);
                let target = $this.data("target");

                if (target) {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(target).offset().top
                    }, 1000);
                }
            });
        },
        reset_input: function() {
            $(".js-reset-input").click(function(e) {
                e.preventDefault();
                let $this = $(this);
                let form = $this.data("target-form");
                if (form) {
                    $(form).find("input[type='text']").each(function(index, ele) {
                        $(ele).val("");
                    });
                    $(form).find("textarea").each(function(index, ele) {
                        $(ele).val("");
                    });
                    $(form).find(".input-group").each(function(index, ele) {
                        $(ele).hasClass("has-error") ? $(ele).removeClass("has-error") : false;
                    });
                }
            });
        },
    };

    MINIMALDOG.documentOnLoad = {
        init: function() {
            MINIMALDOG.documentOnLoad.back_top();
        },
        back_top: function() {
            let backTopPosition = $(".js-back-top");
            if ($(window).scrollTop() > 100) {
                backTopPosition.addClass("active");
            } else {
                backTopPosition.removeClass("active");
            }
        },

    };


    $document.ready(MINIMALDOG.documentOnReady.init);
    $window.on("load", MINIMALDOG.documentOnLoad.init);
    $window.on("resize", MINIMALDOG.documentOnResize.init);
    $window.on("scroll", MINIMALDOG.documentOnScroll.init);
})(jQuery);