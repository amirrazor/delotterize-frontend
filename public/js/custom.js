;(function ($) {
    "use strict"

    // NAVBAR
    $(".navbar-nav .nav-link").click(function () {
        $(".navbar-collapse").collapse("hide")
        $(".navbar-collapse").collapse({
            toggle: false,
        })
    })

    $(window).scroll(function () {
        var scroll = $(window).scrollTop()

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav")
        } else {
            $(".navbar").removeClass("sticky-nav")
        }
    })
})(window.jQuery)
