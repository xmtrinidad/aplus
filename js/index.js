let $pageTitle = $(".curr_page_title");


// scroll to top
$(".to_top").on("click", function(){
    $("body").animate({ scrollTop: 0 }, 500);
});

// hide/show to_top button depending on scroll position
$(window).scroll(function(){
    let position = $(document).scrollTop();
    if (position >= 400) {
        $(".to_top").show();
    } else {
        $(".to_top").hide();
    }
});




