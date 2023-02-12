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

let iconMenu = document.getElementById("menu")
let closeMenu = document.getElementById("close-menu")
let mobileNav = document.getElementById("mobile-container")

iconMenu.addEventListener("click", mobileMenu)
closeMenu.addEventListener("click", closeMobileMenu)

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