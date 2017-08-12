// Show sections (Hardware section, network section etc)

/**
 * This is the svg nav at top
 */
$(".select div").on("click", function(){
    let clickedClass = $(this).attr("class").split(" ")[0];
    sectionButtons($(this));
    showHideSections(clickedClass)
});

//sub section nav
let $subSectionNavBtns = $(".section_nav p");
$subSectionNavBtns.on("click", function(){
    $(this).parent().find(".curr").removeClass("curr");
    $(this).addClass("curr");
});

// Add/remove active class to buttons
function sectionButtons(btn) {
    $(btn).parent().find(".active").removeClass("active");
    $(btn).addClass("active");
}

//Show/hide sections
function showHideSections(clicked) {
    // Hide subsections
    $("main").find(".section_active").removeClass("section_active");
    $(".section_nav_active").removeClass("section_nav_active");
    // Show individual sections
    $("main section." + clicked).addClass("section_active");

    // Show subsections
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