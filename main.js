function onload() {
    $("#to_about").click(toBio);
    $("#to_resume").click(toResume);
    $("#to_projects").click(toProject);
}


function toResume() {
    $('html,body').animate({
           scrollTop: $("#resume").offset().top
    });
}

function toProject() {
    $('html,body').animate({
           scrollTop: $("#projects").offset().top
    });
}

function toBio() {
    $('html,body').animate({
           scrollTop: $("#about_me").offset().top
    });
}
