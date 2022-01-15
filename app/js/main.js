$(function() {
  
  $('.reviews__slider').slick({
    prevArrow: "<button type='button' class='slick-prev slick-arrow'><svg class='reviews__slick reviews__slick--prev'><use xlink:href=images/sprite.svg#prev_arrow></use></svg></button>",

    nextArrow: "<button type='button' class='slick-next slick-arrow'><svg class='reviews__slick reviews__slick--next'><use xlink:href=images/sprite.svg#next_arrow2></use></svg></button>",

    dots: true,
    arrows: true
  });

});

var mixer = mixitup('.top-categories__products');
