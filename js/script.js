$(document).ready(function(){

  var firstSlide = $('.firstSlide');
  var lastSlide = $('.lastSlide');

    $('.next').on('click', function(){
        console.log('Clicked!');

        var container = $('.container');    
        var sliderOuter = container.children('.slider_outer');
        var carousel = sliderOuter.children('.slider_inner');
        var currentSlide = carousel.children('.active');
        var nextSlide = currentSlide.next();

        console.log(container);
        console.log(carousel);
        console.log(currentSlide);
        console.log(nextSlide);
        if(nextSlide.length){
            currentSlide.removeClass('active').css('z-index', -10);
            nextSlide.addClass('active').css('z-index', 10);
        }
        else{
          nextSlide = firstSlide;
          currentSlide.removeClass('active').css('z-index', -10);
          nextSlide.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        console.log('Clicked!');
        
        var container = $('.container');
        var sliderOuter = container.children('.slider_outer');
        var carousel = sliderOuter.children('.slider_inner');
        var currentSlide = carousel.children('.active');
        var prevSlide = currentSlide.prev();

        console.log(container);
        console.log(carousel);
        console.log(currentSlide);
        console.log(prevSlide);
        if(prevSlide.length){
          currentSlide.removeClass('active').css('z-index', -10);
          prevSlide.addClass('active').css('z-index', 10);
        }
        else{
          nextSlide = lastSlide;
          currentSlide.removeClass('active').css('z-index', -10);
          nextSlide.addClass('active').css('z-index', 10);
        }
      });
});

function SwitchToMobileView(){
  var nav = document.getElementById("navbar");
  var navButtons = $('.navbutton');

  console.log(navButtons);

  if(navButtons === ".to-be-hidden")
  {
    navButtons.removeClass('to-be-hidden');
  }
  else
  {
    navButtons.addClass('to-be-hidden');
  }

  if(nav.className === "header")
  {
    nav.className += "responsive";
  }
  else
  {
    nav.className = "header";
  }
}

$(window).resize(function(){
  var currHeight = $(window).height();
  var currWidth = $(window).width();

  console.log(currHeight,currWidth);

  if(currHeight > 600 || currWidth > 600)
  {
    var navButtons = $('.navbutton');
    var nav = document.getElementById("navbar");
    navButtons.addClass('to-be-hidden');
    nav.className = "header";
  }
});