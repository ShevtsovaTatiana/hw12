$(function() {
  
  $('.reviews__slider').slick({
    prevArrow: "<button type='button' class='slick-prev slick-arrow reviews__slick reviews__slick--prev'><svg class='reviews__arrow reviews__arrow--prev'><use xlink:href=images/sprite.svg#Vector></use></svg></button>",

    nextArrow: "<button type='button' class='slick-next slick-arrow reviews__slick  reviews__slick--next'><svg class='reviews__arrow reviews__arrow--next'><use xlink:href=images/sprite.svg#Vector></use></svg></button>",

    dots: true,
    arrows: true
  });

});

var mixer = mixitup('.top-categories__products');
