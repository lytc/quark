$(function() {
    // focusable
    $('.btn-menu').attr('tabindex', 1);

    $('.btn, .btn-group > *, .btn-menu > *:first-child, .btn-split > button, .btn-split > input, .btn-split > a').click(function() {
        $(this).focus();
    });

    $(document.body).on('click', function(e) {
        $('.btn-menu, .btn-split').removeClass('open');

        var target = $(e.target)
            ,isSelectors = [
                '.btn-menu > *:first-child'
                ,'.btn-split > button:last-of-type'
                ,'.btn-split > input:last-of-type'
                ,'.btn-split > a:last-of-type'
            ];

        if (target.is(isSelectors.join(', '))) {
            target.parent().toggleClass('open');
            return false;
        }
    });
});