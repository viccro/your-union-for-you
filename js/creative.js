/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var offset = 50; // default offset

        // Use larger offset for contact section
        if ($anchor.attr('href') === '#contact') {
            offset = 80;
        }

        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - offset)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Close mobile dropdown when clicking outside (narrow screens only)
    $(document).on('click', function(event) {
        // Only apply this behavior on narrow screens
        if ($(window).width() <= 767) {
            var $navbar = $('.navbar-collapse');
            var $navbarToggle = $('.navbar-toggle');

            // Check if dropdown is open and click is outside navbar
            if ($navbar.hasClass('in') &&
                !$navbar.is(event.target) &&
                $navbar.has(event.target).length === 0 &&
                !$navbarToggle.is(event.target) &&
                $navbarToggle.has(event.target).length === 0) {

                // Save current scroll position
                var scrollTop = $(window).scrollTop();

                // Close the dropdown
                $navbar.collapse('hide');

                // Restore scroll position after a brief delay to ensure DOM update
                setTimeout(function() {
                    $(window).scrollTop(scrollTop);
                }, 10);
            }
        }
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict