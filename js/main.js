/**
 * Created by gollum23 on 7/9/15.
 */

(function () {
    'use strict';

    $(document).on('scroll', function () {
        var toTop = $(this).scrollTop();
        if(toTop > 500) {
            $('.BackTop').fadeIn();
        }
        else {
            $('.BackTop').fadeOut();
        }
    });

    $('.Navigation').find('a').on('click', function() {
        $.scrollTo('#'+($(this).data('link')), 1000);
    });

    $('.BackTop').on('click', function() {
        $.scrollTo(0, 1000);
    });

})();
