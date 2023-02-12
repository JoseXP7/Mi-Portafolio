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
}

function closeMobileMenu() {
	mobileNav.style.display = "none"
}