

var galleryImages = [
['ore1', 'Turquoise Nugget Earrings'],
['ore9', 'Black Cinnabar Earrings'],
['ore11' 'White Shell Earrings'], 
['ore12', 'White Shell and Flower Charm Earrings']
];

function print(message) {
	var pictureDiv = document.getElementById ('picture');
	pictureDiv.innerHTML = message;
}

function displayImages(list) {
	var listHTML = '<div class="img">';
	for (var i = 0; i<list1.length; i +=1) {
		listHTML += '<img class="img-zoom" src="./images/' + list[i][0] + '.png" alt="" width="300" height="200">';
		listHTML += '<div class="desc">' + list[i][1] + '</div>';
				
	}
	listHTML += '</div>';
	print(listHTML);
}

displayImages (galleryImages);
			  
			  
			 