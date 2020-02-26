$(document).ready(function(){
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('fixed');
    }
    else {
      $('nav').removeClass('fixed');
    }
 });
});

//sem je navigace

//sem je sipka
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var tcks = document.getElementsByClassName("tck");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < tcks.length; i++) {
    tcks[i].className = tcks[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  tcks[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}
