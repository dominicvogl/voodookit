(function($) {

    $(function() {

        $('.mod-slider').each(function() {

            var _ = $(this);
            _.owlCarousel({
                navigation: true,
                // "singleItem:true" is a shortcut for:
                items : 1,
                itemsDesktop : false,
                itemsDesktopSmall : false,
                itemsTablet: false,
                itemsMobile : false
            });

        });

        $('.mod-carousel').each(function() {

            var _ = $(this);
            _.owlCarousel({
                // Options
            });

        })

    })

})(jQuery);