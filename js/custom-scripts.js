$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider-wrap').animate({opacity: '1'}, 500);
    }, 500);

    $('.popup-links').mCustomScrollbar();

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-menu .control").length && !$(event.target).closest(".custom-menu .popup-menu").length) {
            $('.popup-menu').removeClass('active');
        }

    });

    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.custom-menu .control').click(function() {

        $('.popup-menu').removeClass('active');
        $(this).siblings('.popup-menu').toggleClass('active');

    });


});