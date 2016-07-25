(function($) {

    $(function() {

        $('.mod-slider').each(function() {

            var _ = $(this);
            _.Slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });

        });

        $('.mod-carousel').each(function() {

            var _ = $(this);
            _.slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
            });

        })

    })

})(jQuery);