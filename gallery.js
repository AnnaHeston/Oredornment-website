

var galleryImages = [
'ore1', 
'ore9', 
'ore11', 
'ore12'
];

var galleryNotes = [
'Turquoise Nugget Earrings',
'Black Cinnabar Earrings',
'White Shell Earrings',
'White Shell and Flower Charm Earrings'
];

function print(message) {
	document.write(message);
}

function displayImages(list1, list2) {
	var listHTML = '<div class="img">';
	for (var i = 0; i<list1.length; i +=1) {
		listHTML += '<img class="img-zoom" src="./images/' + list1[i] + '.png" alt="" width="300" height="200">';
		listHTML += '<div class="desc">' + list2[i] + '</div>';
				
	}
	listHTML += '</div>';
	print(listHTML);
}

displayImages (galleryImages, galleryNotes);
			  
			  
			 