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
  var browse = 'browse.html';
  console.log(path);
  if (path == '/netgames/browse.html') { 
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

  $('html').on('click',function(){
    $('.visible').each(function(){
      if (!$(this).hasClass('screen')) {
        $(this).removeClass('visible');
      }
    });
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
}

/* Scrolling */

var pkg = {};
pkg.drag = function(el,areaW,parW) {
  var scrPos = el.position().left - 24;
  var scrollable = el.closest('.package').find('.package-scroll');
  scrollable.css({left: -(scrPos*(areaW/parW))});
  var shadowLeft = el.closest('.package').find('.shadow.left');
  var shadowRight = el.closest('.package').find('.shadow.right');
  var percent = (scrPos*(areaW/parW))/100;
  shadowLeft.css('opacity',percent);
  shadowRight.css('opacity',1-percent);
}
pkg.scrollInit = function() {
  $('.scroll-bar').each(function(){
    var scrollable = $(this).closest('.package').find('.package-scroll'),
        scrollbar = $(this).closest('.scroll'),
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

$(function() {
  header.init();
  main.init();
  footer.init();
  pkg.scrollInit()
});