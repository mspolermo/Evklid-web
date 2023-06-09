const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
});

//Accordion
$( function() {
    $( "#accordion" ).accordion({collapsible: true, active: false});
} );
