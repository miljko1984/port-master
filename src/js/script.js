$( document ).ready(function() {

  /* Scroll on navigation */
  $('.introNav').click(function(){
    $('html,body').animate({scrollTop:$('#intro').offset().top},1000);
  });

  $('.aboutNav').click(function(){
    $('html,body').animate({scrollTop:$('#about').offset().top},1000);
  });

  $('.workNav').click(function(){
    $('html,body').animate({scrollTop:$('#work').offset().top},1000);
  });

  $('.blogNav').click(function(){
    $('html,body').animate({scrollTop:$('#blog').offset().top},1000);
  });

  $('.contactNav').click(function(){
    $('html,body').animate({scrollTop:$('#contact').offset().top},1000);
  });




  // $('a[href^="#"]').on('click',function (e) {
  //   e.preventDefault();
  //   var target = this.hash;
  //   $ target = $(target);
  //   $('html, body').stop().animate({
  //     'scrollTop':  parseInt(target.offset().top,10)
  //   }, 900, 'swing', function () {
  //   });
  // });

  // Close mobile navbar after click
  // $('.navbar-collapse a').click(function(){
  //   $('.navbar-collapse').collapse('hide');
  // });

  // Disable unused links
  // $('.link').click(function(ev) {
  //   ev.preventDefault();
  // });

});