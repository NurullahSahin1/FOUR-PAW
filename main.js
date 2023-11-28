let count = selector => {
    $(selector).each(function () {
        $(this)
            .animate({
                counter: $(this).text()
            }, {
                duration: 4000, // Set the duration to 4 seconds
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            });
    });
};

let a = 0;
$(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        count(".rect>h1");
    }
});


let navbar = $(".navbar");
$(window).scroll(function () {
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky-top");
    } else {
        navbar.removeClass("sticky-top");

    }
});