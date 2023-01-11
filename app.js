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