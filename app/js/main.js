$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    min: 0,
    max: 1200,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  $('.reviews__slider').slick({
    prevArrow: "<button type='button' class='slick-prev slick-arrow reviews__slick reviews__slick--prev'><svg class='reviews__arrow reviews__arrow--prev'><use xlink:href=images/sprite.svg#Vector></use></svg></button>",

    nextArrow: "<button type='button' class='slick-next slick-arrow reviews__slick  reviews__slick--next'><svg class='reviews__arrow reviews__arrow--next'><use xlink:href=images/sprite.svg#Vector></use></svg></button>",

    dots: true,
    arrows: true
  });

});

var $range = $(".filter-price__input"),
  $inputFrom = $(".filter-price__input-from"),
  $inputTo = $(".filter-price__input-to"),
  instance,
  min = 0,
  max = 1200,
  from = 0,
  to = 0;

var mixer = mixitup('.top-categories__products');