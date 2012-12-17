var itemDB = {}
itemDB.single = [{
  'name':'Hero Academy',
  'windows':'active',
  'esrb':'Everyone',
  'genre':'Puzzle',
  'osx':'active',
  'rating':'45',
  'rating-count':'1,273',
  'list-price':'$29.99',
  'price':'$19.99',
  'update':'available',
  'developer':'Robot Entertainment',
  'publisher':'Robot Entertainment',
  'serial':'HKJH2H-SKHJD3',
  'package':'available',
  'thumb-feature':'./img/feature_hero-academy.png',
  'thumb-med':'./img/game-thumb_hero-academy-medium.png',
  'thumb-large':'./img/game-thumb_hero-academy-large.png',
  'thumb-marquee':'./img/game-thumb_hero-academy-marquee.png'
},
{
  'name':'New Super Mario Bros U',
  'windows':'active',
  'esrb':'Everyone',
  'genre':'Action',
  'rating':'5',
  'rating-count':'914',
  'list-price':'$49.99',
  'price':'$39.99',
  'update':'available',
  'developer':'Nintendo',
  'publisher':'Nintendo of America',
  'serial':'JU832-23-KH-UYE',
  'thumb-small':'./img/game-thumb_mario-small.png',
  'thumb-med':'./img/game-thumb_mario-medium.png',
  'thumb-large':'./img/game-thumb_mario-large.png',
  'thumb-marquee':'./img/game-thumb_mario-marquee.png',
  'thumb-feature':'./img/game-thumb_mario-feature.png'
},{
  'name':'The Sims 3',
  'windows':'active',
  'esrb':'Teen',
  'genre':'Simulation',
  'osx':'not-active',
  'rating':'5',
  'rating-count':'4,938',
  'list-price':'$49.99',
  'price':'$39.99',
  'developer':'The Sims Studio',
  'publisher':'Electronic Arts',
  'serial':'JU832-23-KH-UYE',
  'package':'available',
  'thumb-small':'./img/game-thumb_sims3-small.png',
  'thumb-med':'./img/game-thumb_sims3-medium.png',
  'thumb-large':'./img/game-thumb_sims3-large.png',
  'thumb-marquee':'./img/game-thumb_sims3-marquee.png',
  'thumb-feature':'./img/game-thumb_sims3-feature.png'
},{
  'name':'Call of Duty: Black Ops II',
  'windows':'active',
  'esrb':'Mature',
  'genre':'Action',
  'osx':'not-active',
  'rating':'5',
  'rating-count':'3,942',
  'list-price':'$59.99',
  'price':'$49.99',
  'developer':'Treyarch',
  'publisher':'Activision',
  'serial':'JU832-23-KH-UYE',
  'thumb-small':'./img/game-thumb_cod-black-ops-2-small.png',
  'thumb-med':'./img/game-thumb_cod-black-ops-2-medium.png',
  'thumb-large':'./img/game-thumb_cod-black-ops-2-large.png',
  'thumb-marquee':'./img/game-thumb_cod-black-ops-2-marquee.png',
  'thumb-feature':'./img/game-thumb_cod-black-ops-2-feature.png'
},{
  'name':'Super Meat Boy',
  'windows':'active',
  'osx':'active',
  'esrb':'Teen',
  'genre':'Action',
  'rating':'45',
  'rating-count':'1,102',
  'list-price':'$19.99',
  'price':'$9.99',
  'developer':'Team Meat',
  'publisher':'Team Meat',
  'serial':'JU832-23-KH-UYE',
  'package':'available',
  'thumb-small':'./img/game-thumb_super-meat-boy-small.png',
  'thumb-med':'./img/game-thumb_super-meat-boy-medium.png',
  'thumb-large':'./img/game-thumb_super-meat-boy-large.png',
  'thumb-marquee':'./img/game-thumb_super-meat-boy-marquee.png',
  'thumb-feature':'./img/game-thumb_super-meat-boy-feature.png'
}];
itemDB.pkg = [{
  'name':'The Sims 3: Super Fun Pack',
  'windows':'active',
  'esrb':'Teen',
  'genre':'Simulation',
  'osx':'active',
  'rating':'5',
  'rating-count':'914',
  'price':'14',
  'package-count':'12',
  'developer':'The Sims Studio',
  'publisher':'Electronic Arts',
  'update':'available',
  'serial':'Not Applicable',
  'games':[{
    'sub-name':'The Sims 3',
    'thumb-small':'./img/game-thumb_sims3-small.png',
    'sub-rating':'45'
    },{
    'sub-name':'The Sims 3: Ambitions',
    'thumb-small':'./img/game-thumb_sims3-ambitions-small.png',
    'sub-rating':'4'
    },{
      'sub-name':'The Sims 2: University',
      'thumb-small':'./img/game-thumb_sims2-university-small.png',
      'sub-rating':'4'
    },{
      'sub-name':'The Sims 3: Generations',
      'thumb-small':'./img/game-thumb_sims3-generations-small.png',
      'sub-rating':'4'
    }]
  },{
  'name':'Minecraft &amp; Friends',
  'windows':'active',
  'esrb':'Teen',
  'genre':'Action',
  'osx':'active',
  'rating':'45',
  'rating-count':'2,914',
  'price':'14',
  'package-count':'10',
  'developer':'Various',
  'publisher':'NetGames',
  'serial':'Not Applicable',
  'games':[{
    'sub-name':'Hero Academy',
    'thumb-small':'./img/game-thumb_hero-academy-small.png',
    'sub-rating':'5'
    },{
    'sub-name':'Minecraft',
    'thumb-small':'./img/game-thumb_minecraft-small.png',
    'sub-rating':'4'
  },{
    'sub-name':'The Sims 2: University',
    'thumb-small':'./img/game-thumb_sims2-university-small.png',
    'sub-rating':'4'
  },{
    'sub-name':'The Sims 3: Generations',
    'thumb-small':'./img/game-thumb_sims3-generations-small.png',
    'sub-rating':'4'
  }]
}];

itemDB.trailers = [{
  'name':'Far Cry 3: The Story (UK)',
  'submitted':'2 hours Ago',
  'thumb':'far-cry-3',
  'time':'2:59',
  'resolution':'hidef',
  'rating':'45',
  'rating-count':'1,955'
},{
  'name':'Castle Story',
  'submitted':'2 hours Ago',
  'thumb':'castle-story',
  'time':'1:00',
  'resolution':'meddef',
  'rating':'45',
  'rating-count':'95'
},{
  'name':'Rayman Jungle Run',
  'submitted':'3 days ago',
  'thumb':'rayman',
  'time':'3:23',
  'resolution':'lowdef',
  'rating':'35',
  'rating-count':'198,428'
},{
  'name':'Call of Duty: Black Ops II',
  'submitted':'3 days ago',
  'thumb':'cod',
  'time':'2:53',
  'resolution':'hidef',
  'rating':'45',
  'rating-count':'1,198,428'
},{
  'name':'Bioshock: Infinite',
  'submitted':'3 days ago',
  'thumb':'bioshock',
  'time':'1:41',
  'resolution':'hidef',
  'rating':'5',
  'rating-count':'3,198,428'
}];

var templateDir = './templates/';

var header = {};
header.init = function() {
  var obj = $('<header></header>');
  obj.load(templateDir + 'header.html',function(){
    $('div[template="header"]').replaceWith(obj);
    header.loaded();
  });
}

/* Scrolling */

var pkg = {};
pkg.drag = function(el,areaW,parW) {
  var 
    scrPos      = el.position().left - 24,
    scrollable  = el.closest('.package').find('.scrollable'),
    shadowLeft  = el.closest('.package').find('.shadow.left'),
    shadowRight = el.closest('.package').find('.shadow.right'),
    percent     = (scrPos*(areaW/parW))/100;
  scrollable.css({left: -(scrPos*(areaW/parW))});
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

templateFunction.packageScroll = function(element) {
  var 
    container  = element.find('.scroll'),
    scrW       = parW / (areaW/parW),
    scrollable = element.find('.scrollable'),
    miniW      = scrollable.find('.mini-item').outerWidth(true)+20,
    scrollableW;

  scrollableW = miniW*scrollable.find('.mini-item').size();
  console.log(scrollableW);
  scrollable.css('width',scrollableW);
  var
    parW       = scrollable.width()-2,
    areaW      = scrollable.width();

  function drag(el,areaW,parW) {
    var 
      scrPos      = el.position().left - 24,
      scrollable  = el.closest('.package').find('.scrollable'),
      shadowLeft  = el.closest('.package').find('.shadow.left'),
      shadowRight = el.closest('.package').find('.shadow.right'),
      percent     = (scrPos*(areaW/parW))/100;
    scrollable.css({left: -(scrPos*(areaW/parW))});
    shadowLeft.css('opacity',percent);
    shadowRight.css('opacity',1-percent);
  }
  element.find('.scroll-bar').draggable({
    axis: 'x',
    containment:'parent',
    drag: function() {
      drag($(this),areaW,parW)
    }
  });
}

templateFunction.headerLoaded = function() {
  var signIn = $('#status .sign-in');
  signIn.find('.guest').click(function(event){
    signIn.find('.user-popup').toggleClass('visible');
    signIn.find('.user-popup .login').addClass('visible');
    event.stopPropagation();
  });
  signIn.find('#register').on('click',function() {
    $(this).closest('.screen').removeClass('visible');
    $(this).closest('.user-control').find('.register.screen').addClass('visible');
  });
  signIn.find('[name="register"]').on('click',function() {
    window.location = 'registration.html';
  });

  var account = $('#status .account');
  account.find('.user').on('click',function(event){
    $('.popup').removeClass('visible');
    account.find('.user-popup').toggleClass('visible');
    account.find('.user-popup .login').addClass('visible');
    event.stopPropagation();
  });
  account.find('.logout').closest('a').on('click',function(){
    $('#status').removeClass('logged-in');
  });

  var cart = $('#status .cart')
  $('#open-cart').click(function(event){
    $('.popup,.user-popup').removeClass('visible');
    cart.find('.cart-popup').toggleClass('visible');
    event.stopPropagation();
  });

  var wishlist = $('#status .wishlist')
  $('#open-wishlist').click(function(event){
    $('.popup,.user-popup').removeClass('visible');
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

function uiBind(element) {
  element.find('.checkbox').on('click',function(){ $(this).toggleClass('checked'); });
  element.find('.selector').on('click',function(){ $(this).toggleClass('selected'); });
  element.find('.switch .btn').on('click',function(){ $(this).parent().find('.btn').toggleClass('active'); });
  element.find('.squareBtn').on('click',function(){ $(this).toggleClass('active'); });
}
templateFunction.asideScroll = function(aside) {
  var clear = function() {
    aside.removeClass('aside-scroll');
    aside.removeAttr('scrolltop');
  }
  function scrolling(aside) {
    var scroll = $(window).scrollTop(),
        asideTop  = aside.offset().top - 12;
    if (scroll > asideTop && !aside.hasClass('aside-scroll')) {
      aside.addClass('aside-scroll');
      aside.attr('scrolltop',asideTop);
    }
    if (scroll < aside.attr('scrolltop')) {
      clear();
    }
  }
  $(window).on('scroll',function(){
    if (aside.closest('.screen').size() > 0) {
      if (aside.closest('.screen').hasClass('visible')) {
        scrolling(aside);
      }
      else { clear(); }
    }
    else {
      scrolling(aside);
    }
  });
  uiBind(aside);
}

templateFunction.lockerInfo = function(item) {
  item.find('.info.popup').on('mouseleave',function(){
    item.find('.info.popup').removeClass('visible');
  });
  item.find('.game-thumb').on('click',function(event){
    item.parent().find('.visible').removeClass('visible');
    item.find('.info.popup').addClass('visible');
    event.stopPropagation();
  });
}

var main = {};
main.init = function() {
  $('html').on('click',function(){
    $('.popup.visible,.menu.visible,.user-popup').each(function(){
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
  $('.menu-container > .btn').on('click',function(event){
    $(this).parent().find('.menu').addClass('visible');
    event.stopPropagation();
  });
  $('#write-a-review').on('click',function(event){
    centerWindow($('#write-review'));
    $('#write-review').addClass('visible');
    event.stopPropagation();
  });
  $('[name="resend-confirmation"]').on('click',function(event){
    spawnWindow($('#confirm-resend-confirmation'));
  });
  $('#checkout .continue').on('click',function(event){
    var screen = $(this).closest('.screen');
    var i = screen.index();
    $('.path').addClass('step-' + parseInt(i+1));
    if (i < $('section.screen').size()) {
      screen.removeClass('visible').next().addClass('visible');
    }
    else {
      $('body').addClass('processing');
      setTimeout(function(){
        spawnWindow($('#order-success'));
        $('body').removeClass('processing');
      },1000);
    }
  });
  $('.order-summary .billing .btn').on('click',function(event){
    centerWindow($('#change-credit-card-popup'));
    $('#change-credit-card-popup').addClass('visible');
    event.stopPropagation();
  });
  $('.order-summary .shipping-speed .btn').on('click',function(event){
    centerWindow($('#change-shipping-speed-popup'));
    $('#change-shipping-speed-popup').addClass('visible');
    event.stopPropagation();
  });
  $('.order-summary .shipping-address .btn').on('click',function(event){
    centerWindow($('#change-shipping-address-popup'));
    $('#change-shipping-address-popup').addClass('visible');
    event.stopPropagation();
  });
  $('.order-summary .billing-address .btn').on('click',function(event){
    centerWindow($('#change-billing-address-popup'));
    $('#change-billing-address-popup').addClass('visible');
    event.stopPropagation();
  });
  $('.address-overview .btn').on('click',function(){
    var screen = $(this).closest('.screen');
    screen.find('[name="fullname"]').val('Sean J MacIsaac');
    screen.find('[name="street-address-1"]').val('456 Bethesday Drive');
    screen.find('[name="city"]').val('Ottawa');
    screen.find('[name="zip"]').val('K1N 8G3');
  });
  $('.credit-card-overview .btn').on('click',function(){
    var screen = $(this).closest('.screen');
    screen.find('[name="credit-card-name"]').val('Sean James MacIsaac');
    screen.find('[name="credit-card-number"]').val('4500 2156 8798 3456');
    screen.find('[name="cid"]').val('546');
    screen.find('[name="expiry"] .btn').html(screen.find('[name="expiry"] .btn').html().replace('Year','2015'));
    screen.find('[name="month"] .btn').html(screen.find('[name="month"] .btn').html().replace('Month','January'));
    screen.find('[name="zip"]').val('K1N 8G3');
  });
  $('.checkbox[name="same-as-shipping"]').on('click',function(){
    $('#billing-address-toggle-container').toggleClass('visible');
  });
  $('.radio').on('click',function(event){
    var group = $(this).attr('group');
    $('.radio[group="' + group + '"]').removeClass('checked');
    $(this).addClass('checked');
    event.stopPropagation();
  });
}

function spinner() {
  $('.spinner').each(function(){
    var spinner = $(this);
    var delay = 90;
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
  main.init();
  pkg.scrollInit()
  spinner();
});