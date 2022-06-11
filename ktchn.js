 /* JQuery гамбургер */
$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') == "none"){
        $(this).removeAttr('style');
      }
    });
  });
  
 /*  Кнопка Наверх */
  let scrollTop = $(".scrollTop");
  $(window).scroll(function() {
    let topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  });
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  }); 

/* Слайдер JQuery */

 //Назначаем первый и последний слайды
  let firstSlide = $(".first-slide");
  let lastSlide = $(".third-slide");
 //Запускаем функцию кнопки PREV
 // Если скрываем первый слайд, то класс "удаляется"
  $(".prev").click(function() {
    if ($(".first-slide").index() == 0) {
      $(".first-slide").hide().removeClass("first-slide");
      lastSlide.toggleClass("first-slide").show();
    } else {
      $(".first-slide").hide().removeClass("first-slide").prev("div").toggleClass("first-slide").show();
    }
  });
 //Запускаем функцию кнопки NEXT
  $('.next').click(function() {
    if ($('.first-slide').index() == 2) {
      $('.first-slide').hide().removeClass('first-slide');
      firstSlide.toggleClass('first-slide').show();
    } else {
      $('.first-slide').removeClass('first-slide').hide().next('div').toggleClass('first-slide').show();
    }
  });
});



/* Слайдер JS */
/* //Устанавливаем индекс слайда по умолчанию
let slideIndex = 1;
showSlides(slideIndex);

// Функция onclick перенесена из html файла 
let prev = document.querySelector(".prev") 
prev.onclick = function(){showSlides(slideIndex -= 1)};

let next = document.querySelector(".next") 
next.onclick = function(){showSlides(slideIndex += 1)};

//Вызов слайдера
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".item");
	
	//Чтобы слайды не исчезали при прямом перелистывании
    if (n > slides.length) {
      slideIndex = 1
    }
	//Чтобы слайды не исчезали при перелистывании в обратном порядке
    if (n < 1) {
        slideIndex = slides.length
    }
	 //Чтобы слайды не накладывались друг на друга
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
	//Чтобы слайды не по умолчанию отображались
    slides[slideIndex - 1].style.display = "block";    
} */