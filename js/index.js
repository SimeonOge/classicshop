var i=0;
var imagefiles=['shoe (1).jpg','shoe (2).jpg','shoe (3).jpg','shoe (4).jpg','shoe (5).jpg', 'shoe (6).jpg', 'shoe (7).jpg', 'shoe (8).jpg', 'shoe (9).jpg'];
window.setInterval(startSlider,1500);

function startSlider()
{
	document.getElementById("topimg").src="images/slider3/"+imagefiles[i];
	i++;
	if(i>8)
	{
		i=0;
	}
}


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

