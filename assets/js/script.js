; (function ($) {
    $(window).on('load', function () {
        $('.btn-tab:first-child').trigger('click');
    });
    $(document).ready(function () {
        // Sticky menu
        var header = $(".pxl-header-sticky");
        var sticky = header.offset().top;
        $(document).on('click', '.pxl-icon-menu-mobile', function () {
            $('.pxl-header-mobile, .pxl-overlay').addClass('active');
        });

        $(document).on('click', '.pxl-cart', function () {
            $('.pxl-cart-wrap, .pxl-overlay').addClass('active');
        });

        $(document).on('click', '.pxl-item-has-child', function () {
            $('.popup-child-menu, .pxl-overlay').addClass('active');
        });

        $(document).on('click', '.prev-button', function () {
            $('.popup-child-menu').removeClass('active');
        });

        $(document).on('click', '.close-button', function () {
            $('.popup-child-menu, .pxl-header-mobile, .pxl-overlay, .pxl-cart-wrap').removeClass('active');
        });

        $(document).on('click', '.pxl-overlay', function () {
            $(this).removeClass('active');
            $('.popup-child-menu,.pxl-cart-wrap,.pxl-header-mobile').removeClass('active');
        });

        $(document).on('click', '.pxl-form-quantity button', function () {
            var $dataCartValue = $(this).parent().find('input').val();
            if ($(this).hasClass('reduce') && $dataCartValue > 0) {
                $(this).parent().find('input').val($dataCartValue - 1);
            } else {
                $(this).parent().find('input').val(parseInt($dataCartValue) + 1);
            }
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() > sticky) {
                header.addClass("active").css('z-index', '1000');
            } else {
                header.removeClass("active");
            }
        });
        // Pxl Slider
        var $slickSlider = $('.pxl-slider .slick-slider');

        $slickSlider.slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });

        $('.pxl-slick-nav-item').on('click', function () {
            var slideIndex = $(this).data('slide');
            $slickSlider.slick('slickGoTo', slideIndex);
        });

        $slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.pxl-slick-nav-item').removeClass('active');
            $('.pxl-slick-nav-item[data-slide="' + nextSlide + '"]').addClass('active');
        });

        $('.pxl-slick-nav-item[data-slide="0"]').addClass('active');

        // Product carousel
        var $productSlider = $('.pxl-product-carousel .slick-slider');

        $productSlider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            fade: false,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1, arrows: false
        });

        $('.pxl-testimonial-carousel-wrapper.slick-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: true,
            infinite: true,
            adaptiveHeight: true,
            variableWidth: false,
            prevArrow: $('.pxl-slick-prev'),
            nextArrow: $('.pxl-slick-next'),
        });

    });

    // Tabs 
    $(document).on('click', '.btn-tab', function () {
        var $idTab = $(this).index() + 1;
        $('.btn-tab').removeClass('active');
        $(this).addClass('active');
        $('.pxl-wrap-block-product').removeClass('active');
        $('.pxl-wrap-block-product[data-group="' + $idTab + '"]').addClass('active');
    });

    //Video
    $(document).on('click', '.pxl-video', function () {
        var $videoId = $(this).attr('data-video-id');
        console.log($videoId);
        $('.pxl-content-popup').append('<div class="pxl-video-modal-content"><iframe src="https://www.youtube.com/embed/' + $videoId + '" allowfullscreen></iframe></div>');
    });


})(jQuery);