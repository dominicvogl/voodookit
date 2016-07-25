(function($) {

    $(function() {

        var slickOptions = {
            prevArrow: '<div class="slick-arrow slick-prev"><span class="icon icon-empire"></span></div>',
            nextArrow: '<div class="slick-arrow slick-next"><span class="icon icon-rebel"></span></div>'
        };

        $('.mod-slider').each(function() {

            var _ = $(this);
            var options = {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            };

            $.extend(options, slickOptions);

            _.slick(options);

        });

        $('.mod-carousel').each(function() {

            var _ = $(this);
            var options = {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
            };

            $.extend(options, slickOptions);
            
            _.slick(options);

        })

    })

})(jQuery);