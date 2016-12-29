

var galleryImages = [
{
	jewelryImg:'ore1', 
    jewelryDesc:'Turquoise Nugget Earrings'
 }
{
	jewelryImg:'ore9', 
	jewelryDesc: 'Black Cinnabar Earrings'
}
{
	jewelryImg: 'ore11', 
	jewelryDesc: 'White Shell Earrings'
}	
{
	jewelryImg: 'ore12', 
	jewelryDesc:'White Shell and Flower Charm Earrings'
}
	
];

function print(message) {
	var pictureDiv = document.getElementById ('picture');
	pictureDiv.innerHTML = message;
}

function displayImages(list) {
	var listHTML = '<div class="img">';
	for (var i = 0; i<list.length; i +=1) {
		listHTML += '<img class="img-zoom" src="./images/' + list[i].jewelryImg + '.png" alt="" width="300" height="200">';
		listHTML += '<div class="desc">' + list[i].jewelryDesc + '</div>';
				
	}
	listHTML += '</div>';
	print(listHTML);
}

displayImages (galleryImages);
			  
			  
			 