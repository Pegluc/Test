const myCarousel = document.getElementById("celias-Slider");
const carouselIndicators = myCarousel.querySelectorAll(".carousel-indicators button span");


let intervalID;

const carousel = new bootstrap.Carousel(myCarousel);

/*Slideshow und die Balken die sich füllen */

window.addEventListener("scroll", function start () { /*Scroll lässt die Slideshow erst bei Scrollen staren */
  fillCarouselIndicator(1);
  this.removeEventListener("scroll", start);
});

myCarousel.addEventListener("touchstart", function() {
  clearInterval(intervalID);
  myCarousel.style.touchAction = "pan-y"
});

myCarousel.addEventListener("touchend", function() {
  fillCarouselIndicator();
});

myCarousel.addEventListener("mousedown", function() {
  clearInterval(intervalID);
});

myCarousel.addEventListener("mouseup", function() {
  fillCarouselIndicator();
});


myCarousel.addEventListener("slide.bs.carousel", function (e) {
  let index = e.to;
  fillCarouselIndicator(++index);
});

function fillCarouselIndicator(index) {
  let i = 0;
  for (const carouselIndicator of carouselIndicators) {
    carouselIndicator.style.width = 0;
  }
  clearInterval(intervalID);

    intervalID = setInterval(function () {
      i++;

      myCarousel.querySelector(".carousel-indicators .active span").style.width =
        i + "%";

      if (i >= 100) {
        // i = 0; -> just in case
        carousel.next();
      }
    }, 50); /*die Zahl bestimmt die Geschwindigkeit*/
}

/*Next und Prev Button*/
function prevSlide(){
  carousel.prev();
}

function nextSlide(){
  carousel.next();
}


/* Die Button für das Overlay auf der Slideshow */

function on(n) {
  document.getElementsByClassName("overlay")[n].style.display = "flex";
  clearInterval(intervalID);  /*hält die Slideshow an */
  document.querySelector("body").style.overflow = "hidden"; /*verhindert das Scrollen nach unten und oben*/
 }

function off(n) {
  document.getElementsByClassName("overlay")[n].style.display = "none";
   fillCarouselIndicator();
   document.querySelector("body").style.overflow = "revert";
}

function playVideo(){
  var video = document.querySelector("video");
  video.muted = true;
  video.loop = true;
  video.playsinline = true;
  video.play();
}
