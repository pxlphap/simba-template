; (function ($) {
    $(document).ready(function () {
        // Sticky menu
        var header = $(".pxl-header-sticky");
        var sticky = header.offset().top;

        $(window).scroll(function () {
            if ($(window).scrollTop() > sticky) {
                header.addClass("active");
            } else {
                header.removeClass("active");
            }
        });
    });
})(jQuery);
