//Sticky navbar

window.onscroll = function() {
	navScroll()
}

let navigation = document.getElementById("navbar")
let sticky = navigation.offsetTop;

function navScroll() {
	if (window.pageYOffset >= sticky) {
		navigation.classList.add("sticky")
	} else {
		navigation.classList.remove("sticky")
		document.getElementById("navbar").style.position = "fixed"
	}
}

//Menu Mobile

let iconMenu = document.getElementById("menu")
let closeMenu = document.getElementById("close-menu")
let mobileNav = document.getElementById("mobile-container")
let mobileLinks = document.getElementById("mobile-links")

iconMenu.addEventListener("click", mobileMenu)
closeMenu.addEventListener("click", closeMobileMenu)
mobileLinks.addEventListener("click", closeMobileMenu)

function mobileMenu() {
	mobileNav.style.display = "block"
	mobileNav.style.animation = "slideInLeft"
	mobileNav.style.animationDuration = "0.5s"
}

function closeMobileMenu() {
	mobileNav.style.animation = "slideOutLeft"
	mobileNav.style.animationDuration = "0.5s"
	setTimeout(function(){
		mobileNav.style.display = "none"
	}, 500)
}

//Carrousel
"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});