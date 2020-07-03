$(function() {

  $('#page-top').click(function(){
    $('html,body').animate({
      'scrollTop':0
    }, 'slow');
  });

  $('.btn_anchor').click(function(){
    var id = $(this).attr('href');
    var height=$('header').height();
    var positon = $(id).offset().top - height;
    $('html,body').animate({
      'scrollTop':positon
    }, 'slow');
  });



});
