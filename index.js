// fade bg
function scrollHandler() {
  var grain = document.getElementById('grain');
  var date = document.getElementById('subtitle');

  var distanceToTop = window.pageYOffset + date.getBoundingClientRect().top;
  var elementHeight = date.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	if (opacity >= 0) {
		grain.style.opacity = opacity;
	}
  else {
    grain.style.opacity= 0
  }
}
window.addEventListener('scroll', scrollHandler);

// fade heading
const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i < splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}
function complete(){
  clearInterval(timer);
  timer = null;
}

//slide images
let bw1 = document.getElementById('bw1');
let bw2 = document.getElementById('bw2');
let bw3 = document.getElementById('bw3');

function bwfade() {
  var value = window.scrollY * 0.2;

  bw1.style.top = value * 0.5 + 'px';
  bw2.style.top = -value * 0.5 + 'px';
  bw3.style.top = value * 0.4 + 'px';
}
window.addEventListener('scroll', bwfade);


// img hover
let container = document.getElementById('t1');
let img = document.getElementById('img-hover');

const onMouseMove = (e) =>{
  img.style.top = e.pageY + 'px';
  img.style.left = e.pageX + 'px';
}

document.addEventListener('mousemove', onMouseMove);

function showImage(){
}

// parallax
let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let bg3 = document.getElementById('bg3');
let bg4 = document.getElementById('bg4');
let bg5 = document.getElementById('bg5');

function parallax() {
  var value = window.scrollY * 0.2;

  bg1.style.top = value * 0.5 + 'px';
  bg2.style.left = -value * 0.5 + 'px';
  bg3.style.top = -value * 0.15 + 'px';
  bg4.style.left = value * 0.2 + 'px';
}

window.addEventListener('scroll', parallax);

// slide heading
let d2one = document.getElementById('d2one');
let d2two = document.getElementById('d2two');

function headingSlide() {
  var value1 = window.scrollY * 0.1;

  d2one.style.left = -value1 * 0.5 + 650 + 'px';
  d2two.style.left = value1 * 0.5 + 250 + 'px';
}
window.addEventListener('scroll', headingSlide);
