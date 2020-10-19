document.addEventListener("DOMContentLoaded", function() {
$('input').on('click', function(){
  $('input').removeClass('active');
  $(this).addClass('active');
});

$('.footerForm input').on('click', function(){
  $('input').removeClass('active');
  $(this).addClass('active');
});


$(".sandwich, .headerMenu li").on('click', function () {
  if ($('.toggleMenu').css('display') === 'block') {
    console.log('dsadsa')
    $(".sandwich").toggleClass("active");
    $('.header .headerMenu').fadeToggle();
  };
});

$('.priceWrapper').on('click', function() {
  $('.priceWrapper').removeClass('activePriceWrapper');
  $(this).toggleClass('activePriceWrapper');
});

});
