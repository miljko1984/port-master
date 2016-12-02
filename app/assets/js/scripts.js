$( document ).ready(function() {

  'use strict';

  // Animated Scroll
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = $(this.hash);
    target = $(target);
    $('html, body').stop().animate({
      'scrollTop':  parseInt(target.offset().top,10)
    }, 900, 'swing', function () {
    });
  });

  // Close mobile navbar after click
  $('.navbar-collapse a').click(function(){
    $('.navbar-collapse').collapse('hide');
  });

  // Disable unused links
  $('.link').click(function(ev) {
    ev.preventDefault();
  });

  // --------------Contact Form Ajax request-----------------------
  $('#form').on('submit', function(event, $this){

    event.preventDefault();

    $this = $(this);

    var data = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };
    $.ajax({
      type: "POST",
      url: "email.php",
      data: data,
      success: function(msg){
        $('.contact-success').fadeIn().delay(3000).fadeOut();
      },
      error: function(msg){
        $('.contact-error').fadeIn().delay(3000).fadeOut();
      }
    });

    // Reset all fields in form after submit button
    $('#form')[0].reset();
  });
});