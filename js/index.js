let $toTopBtn = $(".to_top");

// scroll to top
$toTopBtn.on("click", function(){
    $("body").animate({ scrollTop: 0 }, 500);
});

// hide/show to_top button depending on scroll position
$(window).scroll(function(){
    let position = $(document).scrollTop();
    if (position >= 400) {
        $toTopBtn.show();
    } else {
        $toTopBtn.hide();
    }
});

$(".objective_title").on("click", function(){
    if ($(window).width() >= 768 ) {
        return;
    }
    $(this).parent().find(".objective_list").slideToggle();
});


$(window).on("resize", function(){
    if ($(window).width() >= 768 ) {
        $(".objective_list").show();
    } else {
        $(".objective_list").hide();
    }
});