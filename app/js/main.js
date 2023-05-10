

$(function () {
  


  let lastScroll = 0;
  const defaultOffset = 200;
  const header = $('.header');

  const scrollPosition = () => $(window).scrollTop();
  const containHide = () => header.hasClass('header--hide');

  $(window).scroll(() => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      //scroll down
      header.addClass('header--hide');
    }
    else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.removeClass('header--hide');
    }

    lastScroll = scrollPosition();
  });

  

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
    starWidth: "16px",
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 5.79566C0.0780973 5.62595 0.224753 5.50226 0.401315 5.47663L5.36139 4.75586L7.57966 0.26128C7.6586 0.101281 7.82157 0 7.99997 0C8.17841 0 8.34135 0.101281 8.42032 0.26128L10.6387 4.75586L15.5987 5.47663C15.7752 5.50226 15.9219 5.62595 15.977 5.79563C16.0322 5.96535 15.9862 6.15163 15.8584 6.27616L12.2694 9.77471L13.1165 14.7148C13.1467 14.8907 13.0744 15.0683 12.9301 15.1733C12.8484 15.2326 12.7517 15.2628 12.6545 15.2628C12.5799 15.2628 12.505 15.245 12.4365 15.2089L8 12.8765L3.56374 15.2089C3.40577 15.2919 3.21443 15.2781 3.07009 15.1732C2.92574 15.0683 2.8534 14.8906 2.88356 14.7147L3.73096 9.77471L0.141566 6.27613C0.0138168 6.15163 -0.0322151 5.96535 0.0229731 5.79566Z"fill="#FFB800"/></svg>'
  });

  $('.header__btn').on('click', function () {
    $('.header__catalog-list').toggleClass('header__catalog-list--active')
    $('.header__btn').toggleClass('header__btn--active')
  });

  if ($(window).width() > 1250) {
    $(".header__input").attr("placeholder", "Найти в магазине ...");
  }
  else {
    $(".header__input").attr("placeholder", "Я ищу...");
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

  $('.category-btn').on('click', function () {
    $('.category__form').toggleClass('category__form--active')
    $('.category-btn').toggleClass('show')
  });

  $('.offers-btn').on('click', function () {
    $('.offers__form').toggleClass('offers__form--active')
    $('.offers-btn').toggleClass('show')
  });

  $('.filter-price-btn').on('click', function () {
    $('.filter-price__form').toggleClass('filter-price__form--active')
    $('.filter-price-btn').toggleClass('show')
  });

  var $range = $('.filter-price__input');
  var $inputFrom = $('.filter-price__from');
  var $inputTo = $('.filter-price__to');
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });

  $('.select-style, .card__num').styler();

  $('.catalog-content__filters-btn').on('click', function () {
    $('.catalog-content__filters-btn').removeClass('catalog-content__filters-btn--active');
    $(this).addClass('catalog-content__filters-btn--active')
  })

  $('.double').on('click', function () {
    $('.catalog-content__list').addClass('catalog-content__list--active');
    $('.catalog-content__item').addClass('horizontal-veiw');
  })

  $('.triple').on('click', function () {
    $('.catalog-content__list').removeClass('catalog-content__list--active');
    $('.catalog-content__item').removeClass('horizontal-veiw');
  })

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active')
  })

  $('.open-filters').on('click', function () {
    $('.catalog__wraper').addClass('catalog__wraper--active');
  });

  $('.catalog-filters__close').on('click', function () {
    $('.catalog__wraper').removeClass('catalog__wraper--active');
  });

  $('.card__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icon-arrow-right.svg" alt=""></button>',
  });

  $(".card__rating, .review__star").rateYo({
    numStars: 5,
    readOnly: true,
    normalFill: "#C1C1C1",
    ratedlFill: "#FFB800",
    starWidth: "16px",
    spacing: "6px",
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 5.79566C0.0780973 5.62595 0.224753 5.50226 0.401315 5.47663L5.36139 4.75586L7.57966 0.26128C7.6586 0.101281 7.82157 0 7.99997 0C8.17841 0 8.34135 0.101281 8.42032 0.26128L10.6387 4.75586L15.5987 5.47663C15.7752 5.50226 15.9219 5.62595 15.977 5.79563C16.0322 5.96535 15.9862 6.15163 15.8584 6.27616L12.2694 9.77471L13.1165 14.7148C13.1467 14.8907 13.0744 15.0683 12.9301 15.1733C12.8484 15.2326 12.7517 15.2628 12.6545 15.2628C12.5799 15.2628 12.505 15.245 12.4365 15.2089L8 12.8765L3.56374 15.2089C3.40577 15.2919 3.21443 15.2781 3.07009 15.1732C2.92574 15.0683 2.8534 14.8906 2.88356 14.7147L3.73096 9.77471L0.141566 6.27613C0.0138168 6.15163 -0.0322151 5.96535 0.0229731 5.79566Z"/></svg>'
  });

  $(".message__stars").rateYo({
    numStars: 5,
    normalFill: "#C1C1C1",
    ratedlFill: "#FFB800",
    starWidth: "16px",
    spacing: "6px",
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 5.79566C0.0780973 5.62595 0.224753 5.50226 0.401315 5.47663L5.36139 4.75586L7.57966 0.26128C7.6586 0.101281 7.82157 0 7.99997 0C8.17841 0 8.34135 0.101281 8.42032 0.26128L10.6387 4.75586L15.5987 5.47663C15.7752 5.50226 15.9219 5.62595 15.977 5.79563C16.0322 5.96535 15.9862 6.15163 15.8584 6.27616L12.2694 9.77471L13.1165 14.7148C13.1467 14.8907 13.0744 15.0683 12.9301 15.1733C12.8484 15.2326 12.7517 15.2628 12.6545 15.2628C12.5799 15.2628 12.505 15.245 12.4365 15.2089L8 12.8765L3.56374 15.2089C3.40577 15.2919 3.21443 15.2781 3.07009 15.1732C2.92574 15.0683 2.8534 14.8906 2.88356 14.7147L3.73096 9.77471L0.141566 6.27613C0.0138168 6.15163 -0.0322151 5.96535 0.0229731 5.79566Z"/></svg>'
  });

  $('.tabs__title-link').on('click', function (e) {
    e.preventDefault();

    $('.tabs__title-link').removeClass('tabs__title-link--active');
    $(this).addClass('tabs__title-link--active')

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active')
  });

  $('.recent__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icon-arrow-right.svg" alt=""></button>',
    arrows: true,
    dots: false,
    appendArrows: $('.recent__top'),

    slidesToShow: 4,
    slidesToScroll: 4,
  });

  //   $(window).scrollTop(function () {
  //   if ($(window).scrollTop() >= 200) {
  //     $('.header').addClass('header--hide')
  //   } else  {
  //     $('.header').removeClass('header--hide')
  //   } 
  // });

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