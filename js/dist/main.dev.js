"use strict";

$(document).ready(function () {
  $('.sliders').slick({
    lazyLoad: 'ondemand',
    dots: true,
    dotsClass: 'sliders-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.cards',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 500,
      settings: {
        arrows: true
      }
    }, {
      breakpoint: 425,
      settings: {
        arrows: false
      }
    }]
  });
  $('.cards').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.sliders',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
  $('.mobileMenu').click(function () {
    $('.menu').slideToggle();
    $('.account').show();
  });
  $('.menu').click(function () {
    $('.menu').addClass('close');
  });
  $(document).on('click', '.close', function () {
    $('.menu').slideToggle();
  });
});