/* Mobile nav */
$('.hamburger-menu').click(function() {
    var nav = $('.nav-menu');
    var icon = $('.hamburger');
    
    nav.slideToggle(200);
    
});



$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
     if  ($(window).width() <480 ) {
      $('.nav-menu').slideToggle();
     } 
      
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 150
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
      
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference