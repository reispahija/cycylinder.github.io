let status = "none"
let offcolor = "#000000"

function like() {
	if (status !== "like") {
		document.querySelector("#like").style.backgroundColor = "#ffffff"
		status = "like"
		document.querySelector("#dislike").style.backgroundColor = offcolor

	} else {
		document.querySelector("#like").style.backgroundColor = offcolor
		status = "none"
	}
}

function dislike() {
	if (status !== "dislike") {
		document.querySelector("#dislike").style.backgroundColor = "#ffffff"
		status = "dislike"
		document.querySelector("#like").style.backgroundColor = offcolor

	} else {
		document.querySelector("#dislike").style.backgroundColor = offcolor
		status = "none"
	}
}
