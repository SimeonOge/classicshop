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