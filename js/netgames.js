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
  'thumb-feature':'./img/feature_mario.png',
  'thumb-med':'./img/game-thumb_mario-medium.png',
  'thumb-large':'./img/game-thumb_mario-large.png',
  'thumb-marquee':'./img/game-thumb_mario-marquee.png'
},{
  'name':'The Sims 3',
  'windows':'active',
  'esrb':'Teen',
  'genre':'Simulation',
  'osx':'not-active',
  'rating':'5',
  'rating-count':'914',
  'list-price':'$49.99',
  'price':'$39.99',
  'thumb-feature':'./img/feature_mario.png',
  'thumb-med':'./img/game-thumb_sims3-medium.png',
  'thumb-large':'./img/game-thumb_sims3-large.png',
  'thumb-marquee':'./img/game-thumb_sims3-marquee.png'
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
  if (/browse.html/.test(path) || /game-details.html/.test(path) || /game-details/.test(path) || /search-results/.test(path)) { 
    $('header .secondary-level .tab:eq(4)').addClass('active');
  }
  if (/trailers.html/.test(path)) {
    $('header .secondary-level .tab:eq(1)').addClass('active'); 
  }
  if (!/.html/.test(path)) {
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

/* Ugly prototype stuff */

function itemTemplate() {
  var templateFile = './templates/items.html';
  var templateData = $('<div></div>');
  function runTemplate(element,limit) {
    $('div[' + element + ']').each(function(n){
      var templateRef = $(this);
      var templateName = '[template="' + $(this).attr('template') + '"]';
      var templatePre  = templateData.find(templateName);
      var keys         = itemDB[$(this).attr('obj')];
      for (var i=0;i<keys.length;i++) {
        if (typeof limit != 'undefined') {
          if (i < limit) {
            template.process({'template':templatePre,'keys':keys[i],'element':templateRef});
          }
        }
        else {
          template.process({'template':templatePre,'keys':keys[i],'element':templateRef});
        }
      }
    });
    $('div[' + element + ']').remove();
  }
  templateData.load(templateFile,function(){
    runTemplate('feature-tile',2);
    runTemplate('single-tile',3);
    runTemplate('package-tile');
    runTemplate('package-list');
    runTemplate('single-list');
  });
}

$(function() {
  header.init();
  main.init();
  footer.init();
  pkg.scrollInit()
  spinner();
  itemTemplate();
});