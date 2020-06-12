var slideIndex = 0;
showSlides(slideIndex);

function useMobileImages() {
    // TODO: DRY
    var mq = window.matchMedia("(max-width: 1000px)");
    return mq.matches;
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var pictureCount = 62;

  // limit picture range
  slideIndex = ((slideIndex % pictureCount) + pictureCount) % pictureCount;
  pictureSrc = 'picture-' + slideIndex + '.png'
  if (slideIndex == 0) {
    pictureSrc = 'cover-image.png'
  }

  // switch between mobile or desktop
  subdir = 'desktop'
  if (useMobileImages()) {
    subdir = 'mobile'
  }

  // update image source
  var slide = document.getElementById("slide-image");
  slide.src = '/static/pictures/' + subdir + '/' + pictureSrc;
}