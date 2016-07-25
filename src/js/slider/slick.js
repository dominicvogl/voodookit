(function($) {

    $(function() {

        var slickDefaultOptions = {
            // lazyLoad: 'ondemand',
            prevArrow: '<div class="slick-arrow slick-prev"><span class="icon icon-empire"></span></div>',
            nextArrow: '<div class="slick-arrow slick-next"><span class="icon icon-rebel"></span></div>'
        };


        // simple content or image slider
        $('.mod-slider').each(function() {

            var _ = $(this);
            var options = {
                infinite: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            };

            $.extend(options, slickDefaultOptions);

            _.slick(options);

        });


        // simple content or image carousel
        $('.mod-carousel').each(function() {

            var _ = $(this);
            var options = {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
            };

            $.extend(options, slickDefaultOptions);

            _.slick(options);

        })

    })

})(jQuery);