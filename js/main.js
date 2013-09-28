$(function(){
  var headerHeight = $('header').height();
  $(window).scroll(function(){
    var scrollArea = $(this).scrollTop();
    var trigger = headerHeight - scrollArea;
    if(trigger > 40){
      $('header').height(trigger);
      $('header').css({lineHeight : trigger+'px'});
    }
  }).scroll();
});
