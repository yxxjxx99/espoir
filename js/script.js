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

/* mainSwiper */
$(function() {
   var swiper = new Swiper(".mainSwiper", {
      loop : true,
      loop : true,
      autoplay : {
      delay : 4000,
      disableOnInteraction : false,
      },
      pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      },
   });
})

$(function() {
   AOS.init({
      duration: 1200,
   });
})

/* Swiper */
$(function() {
   var swiper = new Swiper(".newSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


   var swiper = new Swiper(".giftSwiper", {
      spaceBetween: 30,
      slidesPerView : 2,
      loop : true,
      loopAdditionalSlides : 1,
      breakpoints: {
      600: {slidesPerView: 3.5,},
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });


   var swiper = new Swiper(".lipSwiper", {
   spaceBetween: 20,
   slidesPerView : 1.2,
   loop : true,
   loopAdditionalSlides : 1,
   breakpoints: {
      600: {slidesPerView: 1.5,},
      },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   });

   var swiper = new Swiper(".hottokSwiper", {
   spaceBetween: 20,
   slidesPerView : 2,
   loop : true,
   loopAdditionalSlides : 1,
   breakpoints: {
      600: {
         slidesPerView: 5,
         spaceBetween: 40,
      },
      },
   scrollbar: {
      el: ".swiper-scrollbar",
   },
   });

   var swiper = new Swiper(".noticeSwiper", {
   loop : true,
   loop : true,
   autoplay : {
   delay : 3000,
   disableOnInteraction : false,
   },
   direction: "vertical",
   });
})
