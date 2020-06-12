

function hideImageSection() {
    $("#pictures").hide();
}

function showSectionContent(section) {
    $("#project").hide();
    $("#pictures").hide();
    $("#credits").hide();
    $("#about").hide();
    $(section).show();
}

function openNav() {
  $('#topnav .overlay').css({"visibility": "visible"});
  $('#topnav .overlay').css({"opacity": 1});
  hideImageSection();
}

function closeNav() {
  $('#topnav .overlay').css({"visibility": "hidden"});
  $('#topnav .overlay').css({"opacity": 0});
}

function isMobile() {
    var mq = window.matchMedia("(max-width: 1000px)");
    return mq.matches;
}

$('#topnav .overlay .overlay-content a').click(function(e) {
    $('#topnav .overlay .overlay-content a').removeClass('active');
    $(this).addClass('active');
    section = e.currentTarget.hash;
    showSectionContent(section);
    if (isMobile()) {
        closeNav();
    }
    return false;
});