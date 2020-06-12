$(document).ready(function(){
    $('.next').on('click', function(){
        console.log('Clicked!');

        var container = $('.jquery_head');    
        var carousel = container.children('.carousel_container');
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
    });

    $('.prev').on('click', function(){
        console.log('Clicked!');
        
        var container = $('.jquery_head');
        var carousel = container.children('.carousel_container');
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
      });
});