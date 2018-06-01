function colorlis () {
	var lis = $("li");

	for(let i = 0, length1 = lis.length; i < length1; i++){
		if (i % 2 == 0) {
			lis[i].style.background = "#eceff1";
		}
		else {
			lis[i].style.background = "#cfd8dc";
		}
	}
}

//--------------------------------------------------------------
//this will color all the lis in alternating colors
colorlis();

//event listener for trash
$("span").on('click', function(event) {
	$(this).parent().remove();
});

//event listener for plus
$("h1 i").on('click', function(event) {

});