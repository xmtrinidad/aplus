// Show/hide individual subsections
$(".hw.section_nav p").on("click", function(){
    // All sections
    if ($(this).index("p") === 0) {
        for (let i = 0; i < $(".hw .objectives").length; i++) {
            $(".hw .objectives").eq(i).show();
        }
    }
    // Sections 1.1 - 1.4
    else if ($(this).index("p") === 1) {
        for (let i = 0; i < $(".hw .objectives").length; i++) {
            if (i > 3) {
                $(".hw .objectives").eq(i).hide();
            } else {
                $(".hw .objectives").eq(i).show();
            }
        }
    }
    // Sections 1.5 - 1.9
    else if ($(this).index("p") === 2) {
        for (let i = 0; i < $(".hw .objectives").length; i++) {
            if (i < 4 || i > 8) {
                $(".hw .objectives").eq(i).hide();
            } else {
                $(".hw .objectives").eq(i).show();
            }
        }
    }
    // Sections 1.10 - 1.15
    else {
        for (let i = 0; i < $(".hw .objectives").length; i++) {
            if (i < 9) {
                $(".hw .objectives").eq(i).hide();
            } else {
                $(".hw .objectives").eq(i).show();
            }
        }
    }
});