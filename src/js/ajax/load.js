(function($) {

    // $(document).ready(function() {

    'use strict';

    // cache the desired selectors
    var root    = 'https://api.github.com/users/dominicvogl/repos';
    var target  = $('#repo_list');
    var loadMessageClass = 'load';
    var loadMessage = '<p class="'+loadMessageClass+'">Laden...</p>';

    $(".load-repos").click(function() {

        target.append(loadMessage);

        $.ajax({
            type: "GET",
            url: root,
            dataType: "json",
            success: function(result) {
                for(var i in result ) {
                    target.append(
                        "<li><a href='" + result[i].html_url + "' target='_blank'>" + result[i].name + "</a></li>"
                    );
                }

                console.log(result);

                target.find('.'+loadMessageClass+'').remove();
                $("#repo_count").append("Total Repos: " + result.length);
            }
        });

    });

    // });

})(jQuery);