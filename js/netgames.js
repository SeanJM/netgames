$(function() {
  var signIn = $('#status .sign-in');
  signIn.find('.guest').click(function(){
    $(signIn).find('.user-popup').addClass('visible');
  });

  $('input').each(function(){
    $(this).placeholder();
  });
});