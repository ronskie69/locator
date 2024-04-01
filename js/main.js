"use strict";

AOS.init({ once: true })

// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.navbar').addClass('sticky-top');
        $('.navbar').addClass('applyShadow');
        $('.navbar').removeClass('bg-transparent').addClass('bg-primary');
        $('.toppings').removeClass('container').addClass('container-fluid', 'px-2');
    } else {
        $('.navbar').removeClass('sticky-top');
        $('.navbar').removeClass('applyShadow');
        $('.navbar').addClass('bg-transparent').removeClass('bg-primary');
        $('.toppings').addClass('container').removeClass('container-fluid','px-2');

    }
});

// Dropdown on mouse hover
$(document).ready(function () {
    function toggleNavbarMethod() {
        if ($(window).width() > 992) {
            $('.navbar .dropdown').on('mouseover', function () {
                $('.dropdown-toggle', this).trigger('click');
            }).on('mouseout', function () {
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        } else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow'); //shattap
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
    return false;
});

// Testimonials carousel
$(".owl-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    dots: true,
    loop: true,
    center: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});