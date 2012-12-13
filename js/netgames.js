var templateDir = './templates/';

var header = {};
header.init = function() {
  var obj = $('<header></header>');
  obj.load(templateDir + 'header.html',function(){
    $('div[template="header"]').replaceWith(obj);
    header.loaded();
  });
}
header.loaded = function() {
  var path = window.location.pathname;
  if (/browse.html/.test(path) || /game-details.html/.test(path)) { 
    $('header .secondary-level .tab:eq(4)').addClass('active');
  }
  else {
    $('header .secondary-level .tab:eq(0)').addClass('active');
  }
  var signIn = $('#status .sign-in');
  signIn.find('.guest').click(function(event){
    signIn.find('.user-popup').toggleClass('visible');
    signIn.find('.user-popup .login').addClass('visible');
    event.stopPropagation();
  });

  var account = $('#status .account');
  account.find('.user').on('click',function(event){
    account.find('.user-popup').toggleClass('visible');
    account.find('.user-popup .login').addClass('visible');
    event.stopPropagation();
  });
  account.find('.logout').closest('a').on('click',function(){
    $('#status').removeClass('logged-in');
  });

  var cart = $('#status .cart')
  $('#open-cart').click(function(event){
    cart.find('.cart-popup').toggleClass('visible');
    event.stopPropagation();
  });

  var wishlist = $('#status .wishlist')
  $('#open-wishlist').click(function(event){
    wishlist.find('.popup').toggleClass('visible');
    event.stopPropagation();
  });

  $('input').each(function(){
    $(this).placeholder();
  });
  
  $('.visible').on('click',function(event){
    event.stopPropagation();
  });

  $('.switch .btn').on('click',function(event){
    $(this).closest('.switch').find('.active').removeClass('active');
    $(this).addClass('active');
    event.stopPropagation();
  });

  $('#mini-edit-cart').on('click',function(event) {
    $(this).closest('.container').addClass('edit');
    event.stopPropagation();
  });
  $('#mini-view-cart').on('click',function(event) {
    $(this).closest('.container').removeClass('edit');
    event.stopPropagation();
  });

  $('.secondary-level .tab').on('click',function(event){
    if ($(this).find('.menu').size() > 0) {
      $(this).find('.menu').addClass('visible');
    }
    event.stopPropagation();
  });
}
var footer = {};
footer.init = function() {
  var obj = $('<footer></footer>');
  obj.load(templateDir + 'footer.html',function(){
    $('div[template="footer"]').replaceWith(obj);
  });
}

var main = {};
main.init = function() {
  $('html').on('click',function(){
    $('.popup.visible,.menu.visible').each(function(){
      $(this).removeClass('visible');
    });
  });

  $('#show-packages').on('click',function(){
    $('#package-view').addClass('visible');
    $('#single-view').removeClass('visible');
  });
  $('#show-singles').on('click',function(){
    $('#package-view').removeClass('visible');
    $('#single-view').addClass('visible');
  });
  $('.dropdown .btn').on('click',function(event){
    $(this).parent().find('.menu').addClass('visible');
    event.stopPropagation();
  });
  $('.checkbox').on('click',function(){
    $(this).toggleClass('checked');
  });
  $('.squareBtn').on('click',function(){
    $(this).toggleClass('active');
  });
  $('.selector').on('click',function(){
    $(this).toggleClass('selected');
  });
  if ($('aside').size() > 0) {
    $('aside').each(function(){
      var aside = $(this);
      var clear = function() {
        aside.removeClass('aside-scroll');
        aside.removeAttr('scrolltop');
      }
      $(window).on('scroll',function(){
        if (aside.closest('.screen').hasClass('visible')) {
          var scroll = $(window).scrollTop(),
              asideTop  = aside.offset().top - 12;
          if (scroll > asideTop) {
            aside.addClass('aside-scroll');
            aside.attr('scrolltop',asideTop);
          }
          if (scroll < aside.attr('scrolltop')) {
            clear();
          }
        }
        else { clear(); }
      });
    });
  }
  $('#game-details .switch .btn').on('click',function(){
    var id = $(this).attr('id');
    function clear() { $('.screen.visible').removeClass('visible'); }
    if (/about/.test(id)) { clear(); $('#about').addClass('visible'); }
    if (/reviews/.test(id)) { clear(); $('#reviews').addClass('visible'); }
    if (/discussion/.test(id)) { clear(); $('#discussion').addClass('visible'); }
    if (/recommended/.test(id)) { clear(); $('#recommended').addClass('visible'); }
  });
  $('.confirm-menu-container > .btn').on('click',function(event){
    $(this).closest('.confirm-menu-container').find('.confirm-menu').addClass('visible');
    event.stopPropagation();
  });
  $('.confirm-menu .btn').on('click',function(event){
    $(this).closest('.confirm-menu').removeClass('visible');
    if ($(this).closest('.comment').size() > 0 && $(this).hasClass('confirm')) {
      $(this).closest('.comment').remove();
    }
    event.stopPropagation();
  });
  $('.menu-container > .btn').on('click',function(){
    $(this).parent().find('.menu').addClass('visible');
  });

}

/* Scrolling */

var pkg = {};
pkg.drag = function(el,areaW,parW) {
  var scrPos = el.position().left - 24;
  var scrollable = el.closest('.package').find('.scrollable');
  scrollable.css({left: -(scrPos*(areaW/parW))});
  var shadowLeft = el.closest('.package').find('.shadow.left');
  var shadowRight = el.closest('.package').find('.shadow.right');
  var percent = (scrPos*(areaW/parW))/100;
  shadowLeft.css('opacity',percent);
  shadowRight.css('opacity',1-percent);
}
pkg.scrollInit = function() {
  $('.scroll-bar').each(function(){
    if ($(this).closest('.package').size() > 0) {
      var scrollable = $(this).closest('.package').find('.scrollable');
    }
    if ($(this).closest('.media-overview').size() > 0) {
      var scrollable = $(this).closest('.media-overview').find('.scrollable');
    }
    var scrollbar = $(this).closest('.scroll'),
        parW = scrollable.width()-2,
        areaW = scrollbar.width(),
        scrW = parW / (areaW/parW);
    $(this).css('width',areaW/parW*areaW)
    $(this).draggable({
      axis: 'x',
      containment: 'parent',
      drag: function() {
        pkg.drag($(this),areaW,parW);
      }
    });
  });
}
function spinner() {
  $('.spinner').each(function(){
    var spinner = $(this);
    var delay = 90;
    /* Start the animation */
    /* Animate each frame */
    /* Loop animation when done */
    function animate() {
      if (spinner.attr('frame')) {
        var i = parseInt(spinner.attr('frame'))+1;
        spinner.attr('frame',i);
      }
      if (typeof spinner.attr('frame') == 'undefined' || spinner.attr('frame') > 7) { 
        spinner.attr('frame',0); 
      }
      setTimeout(function() { animate(); },delay);
    }
    animate();
  });
}
$(function() {
  header.init();
  main.init();
  footer.init();
  pkg.scrollInit()
  spinner();
});