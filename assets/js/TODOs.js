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
function delAndColor() {
	$(this).parent().remove();
	colorlis();
}
//--------------------------------------------------------------
//this will color all the lis in alternating colors
colorlis();

//event listener for trash
$("span").on('click', function(event) {
	delAndColor();
});

//event listener for plus
$("h1 i").on('click', function(event) {

});

//event listener for li
$("li").on('click', function(event) {
	$(this).toggleClass('toggleLine-through');;
});

//event listener to add an item
$("input").keypress(function(event) {
	//check for enter
	if (event.keyCode === 13) {
		var task = $("input").val();
		$("input").val("");
		//add the li
		$("ul").append('<li><span><i class="fa fa-trash-alt"></i>' + task +'</span></li>');
		//color the li
		colorlis();
		//add new listener for trash
		$("span").last().on('click', function(event) {
			delAndColor();
		});
	}
});