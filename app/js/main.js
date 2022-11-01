$(function () {
  
  $('.hero__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icon-arrow-right.svg" alt=""></button>',
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  $(".rating__star").rateYo({
    numStars: 1,
    readOnly: true,
    normalFill: "#FFB800",
    starWidth: "16px"
  });

  var mixer = mixitup('.top__catalog');

})