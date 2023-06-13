const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
});

//Accordion
$( function() {
    $( "#accordion" ).accordion({collapsible: true, active: false});
} );
//console.log(document.querySelectorAll('.section-working__link'))
document.querySelectorAll('.section-working__link').forEach(function(tubsBtn){
  tubsBtn.addEventListener('click', function(event){
    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.section-working__link').forEach(function(tabContent){
      tabContent.classList.remove('section-working__link_active')
    })
    document.querySelector(`[data-path="${path}"]`).classList.add('section-working__link_active')

    document.querySelectorAll('.section-working__left').forEach(function(tabContent){
      tabContent.classList.remove('section-working__left_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('section-working__left_active')
  })
})