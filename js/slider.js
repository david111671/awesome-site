$(document).ready(() => {
  let currentSlide = 0;
  let isBusy = false;
  $('.slider-arrow').on('click', (e) => {
    const that = $(e.currentTarget);
    const slidesCount = slides.length - 1;
    if(!isBusy){

      if(that.hasClass('right')) {
        currentSlide += 1;
        if(currentSlide > slidesCount) currentSlide=0;
      } else {
        currentSlide -= 1;
        if(currentSlide < 0) currentSlide = slidesCount;
      }
      isBusy= true;
      $('.slider-image').animate({'opacity': 0}, 350, () =>{
        $('.slider-image').css('background-image', 'url('+slides[currentSlide]+')');
        $('.slider-image').animate({'opacity':1}, 350, () => isBusy = false);
      });
    }
  });
});
const slides = [
  'C:/Users/HP/Desktop/lab8/backgrounds/01.jpg'
  'C:/Users/HP/Desktop/lab8/backgrounds/02.jpg'
  'C:/Users/HP/Desktop/lab8/backgrounds/03.jpg'
  'C:/Users/HP/Desktop/lab8/backgrounds/04.jpg'
  'C:/Users/HP/Desktop/lab8/backgrounds/05.jpg'
  'C:/Users/HP/Desktop/lab8/backgrounds/06.jpg'
  'C:/Users/HP/Desktop/lab8/backgrounds/07.jpg'
  'C:/Users/HP/Desktop/lab8/backgrounds/08.jpg'
]
/*const slides = [
  'backgrounds/01.jpg'
  'backgrounds/02.jpg'
  'backgrounds/03.jpg'
  'backgrounds/04.jpg'
  'backgrounds/05.jpg'
  'backgrounds/06.jpg'
  'backgrounds/07.jpg'
  'backgrounds/08.jpg'
]*/
