$(function() {
    $('.new_best_bar > a').on('click', function() {
        $('.new_best_bar > ul').slideToggle()
    });
});
$(function() {
    $('.new_best_bar > a').on('click', function() {                   
        $('.new_best_bar > a > span').toggleClass('on');
     });
 });

 $(function() {
    $('.menu').on('mouseover', function() {
       $('.menubar').addClass('on')
    })
    $('.menubar').on('mouseleave', function() {
       $('.menubar').removeClass('on')
    })
  });
  
  $(function() {
     $('.hamburger_menu').on('click', function() {
        $('.menubar').addClass('on')
     })
     $('.menu_xbtn').on('click', function() {
        $('.menubar').removeClass('on')
     })
   });
  