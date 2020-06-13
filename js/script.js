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
