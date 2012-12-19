var templateDir = './templates/';

/* Scrolling */

templateFunction.packageScroll = function(element) {
  var 
    container  = element.find('.scroll'),
    scrW       = parW / (areaW/parW),
    scrollable = element.find('.scrollable'),
    miniW      = scrollable.find('.mini-item').outerWidth(true)+20,
    scrollableW;

  scrollableW = miniW*scrollable.find('.mini-item').size();
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
  $('header nav .search-container input').on('blur',function(event){
    $('header').removeClass('search-focus');
  });
  $('header nav .search-container input').on('click',function(event){
    $(this).closest('header').addClass('search-focus');
    event.stopPropagation();
  });
}

function uiBind(element) {
  element.find('.checkbox').on('click',function(){ 
    $(this).toggleClass('checked'); 
  });
  element.find('.selector').on('click',function(){ 
    if (!$(this).closest('section').hasClass('disabled')) { $(this).toggleClass('selected'); } 
  });
  element.find('.switch .btn').on('click',function(){ 
    if (!$(this).closest('section').hasClass('disabled')) { 
      $(this).parent().find('.btn').toggleClass('active'); 
    } 
  });
  element.find('.squareBtn').on('click',function(){ 
    if (!$(this).closest('section').hasClass('disabled')) { 
      $(this).toggleClass('active'); 
    } 
  });
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

templateFunction.lockerInfo = function(el) {
  el.find('.info.popup').on('mouseleave',function(){
    el.find('.info.popup').removeClass('visible');
  });
  el.find('.game-thumb').on('click',function(event){
    el.parent().find('.visible').removeClass('visible');
    el.find('.info.popup').addClass('visible');
    event.stopPropagation();
  });
}

function filterRange(el) {
  var slider = el.find('.range-slider');
  slider.each(function(){
    if (!$(this).closest('section').hasClass('disabled')) {
      var 
        curSlider   = $(this),
        knobLeft    = curSlider.find('.knob.left'),
        knobRight   = curSlider.find('.knob.right'),
        range       = curSlider.find('.range'),
        container   = curSlider.find('.slider-container'),
        bubbleLeft  = curSlider.find('.bubble-indicator.left'),
        bubbleRight = curSlider.find('.bubble-indicator.right'),
        rangeOffset = parseInt(curSlider.attr('rangeoffset')),
        rangeVal    = parseInt(curSlider.attr('range')),
        unit        = curSlider.attr('rangeoffset').split('')[0];

      if (/[$%]/.test(curSlider.attr('rangeoffset'))) { rangeOffset = parseInt(curSlider.attr('rangeoffset').substring(1,curSlider.attr('rangeoffset').length)); }
      if (/[$%]/.test(curSlider.attr('range'))) { rangeVal = parseInt(curSlider.attr('range').substring(1,curSlider.attr('range').length)); }
      
      function offsetValue(value) { 
        if (typeof rangeOffset == 'undefined') { rangeOffset = 0; }
        var n = parseInt(parseInt((parseInt(value)/rangeVal)*(rangeVal-rangeOffset))+rangeOffset);
        if (/[$%]/.test(unit)) { return unit + '' + n; }
        return n; 
      }

      function dragKnob(active) {
        var 
          width          = (knobRight.offset().left+(knobRight.width()/3))-knobLeft.offset().left,
          leftPos        = (knobLeft.offset().left+(knobLeft.width()/2))-container.offset().left,
          leftVal        = parseInt(parseInt(knobLeft.css('left'))/container.width()*rangeVal),
          rightVal       = parseInt((parseInt(knobRight.css('left'))+knobRight.width())/container.width()*rangeVal),
          bubbleLeftPos  = (parseInt(knobLeft.css('left'))+knobLeft.width()/2)-(bubbleLeft.width()/2),
          bubbleRightPos = (parseInt(knobRight.css('left'))+knobRight.width()/2)-(bubbleRight.width()/2);
        
        if (knobLeft.offset().left+knobLeft.width() >= knobRight.offset().left) {
          var
            knobLeftX  = parseInt(knobRight.css('left'))-knobLeft.width(),
            knobRightX = parseInt(knobLeft.css('left'))+parseInt(knobLeft.css('width'));
          if (knobLeftX >= 0) { knobLeft.css('left',knobLeftX); }
          if ((knobRightX+knobRight.width()) <= container.width()) { knobRight.css('left',knobRightX); }
        }
        range.css('left',leftPos).css('width',width);
        bubbleLeft.text(offsetValue(leftVal)).css('left',bubbleLeftPos);
        bubbleRight.text(offsetValue(rightVal)).css('left',bubbleRightPos);
      }
      function activate(el) {
        el.addClass('active');
        curSlider.addClass('active');
        $('html').on('mouseup',function(){ 
          el.removeClass('active'); 
          curSlider.removeClass('active'); 
        });
      }
      knobLeft
        .draggable({
          disabled: false,
          axis: 'x',
          containment:'parent',
          drag: function(el) {
            dragKnob();
          }
        })
        .on('mousedown',function(){ activate($(this)); });
      knobRight
        .draggable({
          disabled: false,
          axis: 'x',
          containment:'parent',
          drag: function(el) {
            dragKnob();
          }
        })
        .on('mousedown',function(){ activate($(this)); });
    }
    else { $(this).find('.ui-draggable').draggable('disable'); }
  });
}

function starRatings(el) {
  var ratingsContainer = el.find('.rating-container');
  ratingsContainer.find('.star').on('click',function(event) {
    var 
      mouseX   = event.pageX,
      whole    = $(this).index()+1,
      fraction = (mouseX-$(this).offset().left)/$(this).width()*2;
    if (fraction > 1) { fraction = 0; } else { fraction = 5; }

    var 
      rating        = (whole*10)-fraction,
      currentRating = ratingsContainer.attr('class'),
      newRating     = currentRating.replace(currentRating.replace('rating-container ',''),'rating-' + rating);
    
    ratingsContainer.attr('class',newRating);
  
  });
}

templateFunction.asideUI = function(el) {
  filterRange(el);
  el.find('.checkbox').on('click',function(){
    $(this).closest('section').toggleClass('disabled');
    filterRange(el);
  });
  starRatings(el);
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
    var spinner = $(this),
        delay   = 90;
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
  spinner();
});