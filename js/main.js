(function ($) {



    // data - background - img
    $("[data-background]").each(function () {
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
    });


    $('.counter').counterUp({
        delay: 10,
        time: 19000,
      });
     


})(jQuery);