"use strict";
var jQuery = $;

/**
 * 
 * Sliders
 * Carousels
 * Scroll to Top  
 * Scroll to Top Support
 * 
 */

jQuery(function ($) {
    function carouselSlider() {
        $('#testimonials').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ['<span class="left-arrow"></span>', '<span class="right-arrow"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                520: {
                    items: 1.5
                },
                768: {
                    items: 2.5
                }
            }
        });
    } // carouselSlider 

    function onScoll() {
        var goTopBtn = document.getElementById("move-to-top");
        document.querySelector('body').onscroll = function () {
            if (window.scrollY >= 200) {
                goTopBtn.classList.add('active');
            } else {
                goTopBtn.classList.remove('active');
            }
        };
    } // page scroll

    $("#move-to-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip()



    function formValidate() {
        var input = $('.form-control:required');
        input.blur(function () {
            $(this).each(function () {
                var val = $(this).val();
                $(this).toggleClass("is-invalid", val.length == 0);

            });
        });
    }

    $('p').each(function () {
        var $this = $(this);
        if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
            $this.remove();
    });

    carouselSlider();
    onScoll();
    formValidate();
});