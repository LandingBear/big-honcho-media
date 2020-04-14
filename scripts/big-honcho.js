var clientsHasTriggered;
var logosHasTriggered;

$(document).ready( 
  function() { 

    window.addEventListener('scroll', animateLogos);
    window.addEventListener('scroll', animateClients);
    window.addEventListener('resize', resizeTriangle);

    // Setup the logo pop-in animation.
    logosHasTriggered = false;
    clientsHasTriggered = false;
    animateLogos();
    animateClients();
    resizeTriangle();

    // Setup the button click smooth scrolling.
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()

        $('html, body').animate(
            {scrollTop: $($(this).attr('href')).offset().top,},
            // Make the scroll time longer for longer distances.
            (normalizeValue($($(this).attr('href')).offset().top) * 2000),
            'swing'
        )
    });

  }, false);

function toggleDropdown() {
    $("#bh-services-dropdown").toggleClass("open");
}

function animateLogos() {
    if (!logosHasTriggered) {
        let scrollPosY = window.pageYOffset | document.body.scrollTop;
        if(scrollPosY > ($("#bh-services-section").offset().top - 100)) {
            $(".svg-anim").addClass('svg-anim-active');
            logosHasTriggered = true;
        }
    }
}

function animateClients() {
    if (!clientsHasTriggered) {
        let scrollPosY = window.pageYOffset | document.body.scrollTop;
        if(scrollPosY > ($("#bh-services-section").offset().top + 50)) {
            $(".bh-client-carousel-logo.first").addClass('client-anim-active');
            clientsHasTriggered = true;
        }
    }
}

function normalizeValue(val) {
    return (val / $(document).height());
}

function resizeTriangle() {
    let width = $('#bh-home').width()

    $("#bh-home .bh-header-triangle").css({
      "border-left": width + "px solid transparent",
    });
  }