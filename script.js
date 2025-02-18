let genre = "all";


function vid1() {

	window.location.href = 'vid1.html';

}

function functall() {
	if (genre !== "all") {
		document.querySelector("#all").style.color='#000000'
		document.querySelector("#all").style.backgroundColor='#ffffff'

		document.querySelector("#gaming").style.color='#ffffff'
		document.querySelector("#music").style.color='#ffffff'
		document.querySelector("#DIY").style.color='#ffffff'
		
		document.querySelector("#gaming").style.backgroundColor='#212121'
		document.querySelector("#music").style.backgroundColor='#212121'
		document.querySelector("#DIY").style.backgroundColor='#212121'
		genre = "all"
	}
}

function functgam() {
	if (genre !== "gaming") {
		document.querySelector("#all").style.color='#ffffff'
		document.querySelector("#all").style.backgroundColor='#212121'

		document.querySelector("#gaming").style.color='#000000'
		document.querySelector("#music").style.color='#ffffff'
		document.querySelector("#DIY").style.color='#ffffff'
		
		document.querySelector("#gaming").style.backgroundColor='#ffffff'
		document.querySelector("#music").style.backgroundColor='#212121'
		document.querySelector("#DIY").style.backgroundColor='#212121'
		genre = "gaming"
	}
}



function functmusic() {
	if (genre !== "music") {
		document.querySelector("#all").style.color='#ffffff'
		document.querySelector("#all").style.backgroundColor='#212121'

		document.querySelector("#gaming").style.color='#ffffff'
		document.querySelector("#music").style.color='#000000'
		document.querySelector("#DIY").style.color='#ffffff'
		
		document.querySelector("#gaming").style.backgroundColor='#212121'
		document.querySelector("#music").style.backgroundColor='#ffffff'
		document.querySelector("#DIY").style.backgroundColor='#212121'
		genre = "music"
	}
}



function functDIY() {
	if (genre !== "DIY") {
		document.querySelector("#all").style.color='#ffffff'
		document.querySelector("#all").style.backgroundColor='#212121'

		document.querySelector("#gaming").style.color='#ffffff'
		document.querySelector("#music").style.color='#ffffff'
		document.querySelector("#DIY").style.color='#000000'
		
		document.querySelector("#gaming").style.backgroundColor='#212121'
		document.querySelector("#music").style.backgroundColor='#212121'
		document.querySelector("#DIY").style.backgroundColor='#ffffff'
		genre = "DIY"
	}
}


function sub() {
	document.querySelector(".vids").style.marginTop='-10px'
	document.querySelector(".subs").style.display='none'
	document.querySelector(".genres").style.display='none'
	document.querySelector(".channelicon").style.display='inline'



}


document.addEventListener('DOMContentLoaded', function() {
  const element1s = document.querySelectorAll('.vidholder');
  const element2 = document.querySelector('.vids');

  if (element2) { // Check if the .vids element exists
    element1s.forEach(function(element1) {
      element1.addEventListener('mouseenter', function() {
        element2.style.width = "730px";
      });

      element1.addEventListener('mouseleave', function() {
        element2.style.width = "720px";
      });
    });
  } else {
    console.log('Element with class .vids not found');
  }
});
