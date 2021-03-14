const nav_expand_btn = document.querySelector(".navigation__icon")
const sb = document.querySelector(".sidebar")
const sb_close_btn = document.querySelector(".sidebar i")
const sb_lst_btn = document.querySelectorAll(".sidebar__nav a")

for (var i = 0; i < sb_lst_btn.length; i++) {
	sb_lst_btn[i].addEventListener("click", (e) => {
		var curr = document.querySelector(".sidebar__nav a.active")
		curr.className = curr.className.replace(" active", "")
		e.target.className += " active";	
	})
}

nav_expand_btn.addEventListener("click", () => {
	// console.log("test...")
	sb.classList.add("sidebar--slide-right")
})

sb_close_btn.addEventListener("click", () => {
	sb.classList.remove("sidebar--slide-right")
})
