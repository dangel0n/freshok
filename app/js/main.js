$(function () {

  $('.hero__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icon-arrow-right.svg" alt=""></button>',
    fade: true,
    autoplay: true,
    arrows: true,
    dots: false,
    autoplaySpeed: 7000,

    responsive: [
      {
        breakpoint: 1560,
        settings: {
          arrows: false,
          dots: true,
        }

      }
    ]
  });

  $(".rating__star").rateYo({
    numStars: 1,
    readOnly: true,
    normalFill: "#FFB800",
    starWidth: "16px"
  });

  $('.header__btn').on('click', function () {
    $('.header__catalog-list').toggleClass('header__catalog-list--active')
    $('.header__btn').toggleClass('header__btn--active')
  });

  if ($(window).width() > 1250) {
    $(".header__input").attr("placeholder", "Найти в магазине ...");
  }
  else { $(".header__input").attr("placeholder", "Я ищу..."); 
}

  $('.search').on('click', function () {
    $('.header__form').toggleClass('header__form--active')
  });

  $('.burger-menu').on('click', function () {
    $('.menu-mob').addClass('menu-mob--active')
  });

  $('.menu-mob__close').on('click', function () {
    $('.menu-mob').removeClass('menu-mob--active')
  });

  var containerEl1 = document.querySelector('.top__content');
  var containerEl2 = document.querySelector('.stock__content');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
})