function smoothScroll(target,duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) -1) + b; 
  }

  requestAnimationFrame(animation);
}

// pencegahan
var aPencegahan = document.querySelector("a[href='#pencegahan']");
var pencegahan = document.querySelector('#pencegahan');

// pengertian
var aPengertian = document.querySelector("a[href='#pengertian']");
var pengertian = document.querySelector('#pengertian');

// gejala
var aGejala = document.querySelector("a[href='#gejala']");
var gejala = document.querySelector('#gejala');

// gejala
var aAbout = document.querySelector("a[href='#about']");
var about = document.querySelector('#about');

aPencegahan.addEventListener('click', function() {
  smoothScroll('#pencegahan', 1000)
})

aPengertian.addEventListener('click', function() {
  smoothScroll('#pengertian', 1000)
})

aGejala.addEventListener('click', function() {
  smoothScroll('#gejala', 1000)
})

aAbout.addEventListener('click', function() {
  smoothScroll('#about', 1000)
})






