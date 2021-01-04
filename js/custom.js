$( ".navbar-toggler" ).click(function() {
    $( ".menu" ).addClass("menu-is-open");
    $( ".overlay" ).addClass("overlay-show");
});

$( ".close-menu" ).click(function() {
    $( ".menu" ).removeClass("menu-is-open");
    $( ".overlay" ).removeClass("overlay-show");
});

$( ".overlay" ).click(function() {
    $( ".menu" ).removeClass("menu-is-open");
    $( ".overlay" ).removeClass("overlay-show");
});