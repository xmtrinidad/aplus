// Show/hide individual subsections (1.1, 1.2, 1.3, etc)
let $hwObjectives = $(".hw .objectives");
let $nwObjectives = $(".nw .objectives");
let $tsObjectives = $(".ts .objectives");
let index0 = 0;
let index1 = 1;
let index2 = 2;

// Hardware section
$(".hw.section_nav p").on("click", function(){
    // All sections
    if ($(this).index() === index0) {
        $hwObjectives.show();
    }
    // Sections 1.1 - 1.4
    else if ($(this).index() === index1) {
        showHide($hwObjectives, 3);
    }
    // Sections 1.5 - 1.9
    else if ($(this).index() === index2) {
        showHide($hwObjectives, 4, 8);
    }
    // Sections 1.10 - 1.15
    else {
        showHide($hwObjectives, 9)
    }
});


// Network section
$(".nw.section_nav p").on("click", function(){
    console.log($(this).index());

    // All sections
    if ($(this).index() === index0) {
        $nwObjectives.show();
    }
    // Sections 2.1 - 2.4
    else if ($(this).index() === index1) {
        showHide($nwObjectives, 3);
    }
    // Sections 2.5 - 2.9
    else  {
        showHide($nwObjectives, 4)
    }
});

// Troubleshooting section
$(".ts.section_nav p").on("click", function(){
    // All sections
    if ($(this).index() === index0) {
        $tsObjectives.show();
    }
    // Sections 4.1 - 4.4
    else if ($(this).index() === index1) {
        showHide($tsObjectives, 3);
    }
    // Sections 4.5 - 4.6
    else  {
        showHide($tsObjectives, 4)
    }
});

// get parameters and show/hide sections
function showHide(...args) {
    let objective = arguments[0];
    let param1 = arguments[1];
    let param2 = arguments[2];

    if (arguments.length > 2) {
        for (let i = 0; i < objective.length; i++) {
            i < param1 || i > param2 ? objective.eq(i).hide() : objective.eq(i).show();
        }
    } else if (param1 > 3) {
        for (let i = 0; i < objective.length; i++) {
            i < param1 ? objective.eq(i).hide() : objective.eq(i).show();
        }
    } else {
        for (let i = 0; i < objective.length; i++) {
            i > param1 ? objective.eq(i).hide() : objective.eq(i).show();
        }
    }
}