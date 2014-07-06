//Wrap all the images and display the caption
$(document).ready(function(){

//Find each image, create a caption, and fill it with the alt text
$('.post img').each(function(){

	$(this).wrap(function(){
	return "<div class='image'><span>"+
	"<div>"+$(this).html()+"</div>"+
	"<div class='caption'>"+$(this).attr('alt')+"</div>"+
	"</span></div>"
	})
})

})
