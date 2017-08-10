let $pageTitle = $(".curr_page_title");
let $subSectionNavBtns = $(".section_nav p");

// hide/show to_top button depending on scroll position
$(window).scroll(function(){
    let position = $(document).scrollTop();
    if (position >= 400) {
        $(".to_top").show();
    } else {
        $(".to_top").hide();
    }
});



//Show/hide sections
function showHideSections(clicked) {
    if (clicked === 'hw') {

        $pageTitle.text("1.0 Hardware").css("color", "#f36c23");
        $(".section_nav.hw").addClass("section_nav_active");
        $subSectionNavBtns.css("background-color", "#f36c23");

    } else if (clicked === 'nw') {

        $pageTitle.text("2.0 Networking").css("color", "#f5a81c");
        $(".section_nav.nw").addClass("section_nav_active");
        $subSectionNavBtns.css("background-color", "#f5a81c");

    } else if (clicked === 'mbd') {

        $pageTitle.text("3.0 Mobile Devices").css("color", "#c1d42f");
        $(".section_nav.mbd").addClass("section_nav_active");
        $subSectionNavBtns.css("background-color", "#c1d42f");

    } else {
        $pageTitle.text("4.0 Hardware and Network Troubleshooting").css("color", "#0090ba");
        $(".section_nav.ts").addClass("section_nav_active");
        $subSectionNavBtns.css("background-color", "#0090ba");
    }
}


//sub section nav
$subSectionNavBtns.on("click", function(){
    $(this).parent().find(".curr").removeClass("curr");
    $(this).addClass("curr");
});




