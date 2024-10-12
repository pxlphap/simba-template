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
            $('.pxl-wrap-user-meta').removeClass('active');
        });

        $(document).on('click', '.pxl-cart', function () {
            $('.pxl-cart-wrap, .pxl-overlay').addClass('active');
            $('.pxl-wrap-user-meta').removeClass('active');
        });

        $(document).on('click', '.pxl-show-quickview', function () {
            $('.pxl-wrap-product-popup, .pxl-popup.pxl-overlay').addClass('active');
            $('.pxl-wrap-user-meta').removeClass('active');
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

        $(document).on('click', '.pxl-overlay,.pxl-close-quickview, button.close', function () {
            $(this).removeClass('active');
            $('.popup-child-menu, .pxl-cart-wrap,.pxl-header-mobile, .pxl-wrap-product-popup ').removeClass('active');
            $('.pxl-content-popup').empty().removeClass('active');
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.pxl-wrap-user-meta, .pxl-user').length) {
                $('.pxl-wrap-user-meta').removeClass('active');
            }
        });

        $(document).on('click', '.pxl-user', function (e) {
            e.stopPropagation();
            $('.pxl-wrap-user-meta').toggleClass('active');
        });

        $(document).on('click', '.collection-view .change-mode', function () {
            $('.change-mode').toggleClass('active');
            $('.row2').toggleClass('column');
        });


        $('input[name="paymentmethod"]').on('click', function () {
            var $value = $(this).val();
            $('.payment-method-details').slideUp();
            $('[data-method="' + $value + '"]').slideDown();
        });

        //Video
        $(document).ready(function () {
            $(document).on('click', '#video_icon', function (event) {
                event.preventDefault();
                var $videoId = $(this).attr('data-video-id');
                console.log('Video ID:', $videoId);

                if ($('.pxl-content-popup').length === 0) {
                    console.error('.pxl-content-popup container not found');
                    return;
                }

                $('.pxl-content-popup').empty().addClass('active');

                $('.pxl-content-popup').append('<div class="pxl-close-quickview"><div class="close-button"></div></div><div class="pxl-overlay-video"></div><div class="pxl-video-modal-content"><iframe src="https://www.youtube.com/embed/' + $videoId + '" allowfullscreen></iframe></div>');

                $('.pxl-content-popup').show();
            });
        });

        // Quantity
        $(document).on('click', '.pxl-form-quantity button', function () {
            event.preventDefault();
            var $parent = $(this).parent();
            var $dataCartValue = $parent.find('input').val();

            if ($(this).hasClass('reduce') && $dataCartValue > 0) {
                $parent.find('input').val($dataCartValue - 1);
            } else {
                $parent.find('input').val(parseInt($dataCartValue) + 1);
            }

            $parent.find('input').each(function () {
                var currentValue = $(this).val();
                console.log('Current value:', currentValue);
            });
        });

        $(window).scroll(function () {
            var sticky = 300;
            var header = $(".pxl-header-sticky");

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
        var $productSlider2 = $('.pxl-product-carousel .main-slider');
        var $thumbSlider = $('.pxl-product-carousel .thumb-slider');

        $productSlider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            fade: false,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $('.pxl-slick-prev'),
            nextArrow: $('.pxl-slick-next'),
        });

        $productSlider2.slick({
            dots: false,
            infinite: true,
            speed: 300,
            fade: false,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.thumb-slider'
        });

        $thumbSlider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.main-slider',
            dots: false,
            centerMode: true,
            focusOnSelect: true
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
        var $slickSliderProductPopup = $('.pxl-wrap-product-popup .slick-slider');

        $slickSliderProductPopup.slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: false,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $('.pxl-product-next'),
            nextArrow: $('.pxl-product-prev')
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

    // show popup
    $(document).on('click', '#trigger-enquiry', function () {
        $('.pxl-modal').removeClass('show-enquiry');
        $('.pxl-modal').addClass('show-enquiry');
    });
    $(document).on('click', '.pxl-modal .close-button', function () {
        $('.pxl-modal').removeClass('show-enquiry');
    });

    $('.section-viewport .quantity').append('<span class="quantity-icon"><i class="quantity-down">-</i><i class="quantity-up">+</i></span>');
    $('.quantity-up').on('click', function () {
        $(this).parents('.quantity').find('input[type="number"]').get(0).stepUp();
        $(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled');
    });
    $('.quantity-down').on('click', function () {
        $(this).parents('.quantity').find('input[type="number"]').get(0).stepDown();
        $(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled');
    });
    $('.woocommerce-cart-form .actions .button').removeAttr('disabled');


    // modal popop
    $(document).on('click', '#alertbox', function () {
        $('.pxl-content-popup').append($('#myPopup').clone()).addClass('active');
        $('#myPopup').removeClass('hide').addClass('fade-in-down');
    });

})(jQuery);
