(function($) {
  // data - background - img
  $("[data-background]").each(function() {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  $(".counter").counterUp({
    delay: 10,
    time: 19000
  });

  $("#mypopup").jdbpopup();

  $("#mypopup").jdbpopup({ effect: "scale" });

  $("#mypopup").jdbpopup({
    timeOpen: 1200,
    timeClose: 800,
    easing: "snap",
    effect: "translateX",
    caption: false,
    responsive: true
  });

  $(".testimonial-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".testimonial-img-active"
  });
  $(".testimonial-img-active").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testimonial-active",
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
})(jQuery);
