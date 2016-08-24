(function ($) {
    Drupal.behaviors.bootstrap_bonus = {
        attach: function (context, settings) {
            // Carousel
            $('.carousel-inner').each(function() {
                if ($(this).children('div').length === 1) $(this).siblings('.carousel-control, .carousel-indicators').hide();
            });
        }
    };
}(jQuery));