// scroll to top
$(".to_top").on("click", function(){
    $("body").animate({ scrollTop: 0 }, 500);
});

$(".select div").on("click", function(){
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
    $("main").find(".section_active").removeClass("section_active");
    // remove active class from sections buttons
    $(".section_nav_active").removeClass("section_nav_active");
    // change content
    let clickedClass = $(this).attr("class").split(" ")[0];
    $("main section." + clickedClass).addClass("section_active");
    showHideSections(clickedClass)
});