function colorlis () {
  var lis = $("li");

  for(let i = 0, length1 = lis.length; i < length1; i++){
	if (i % 2 == 0) {
		lis[i].style.background = "#eeeeee";
	}
	else {
		lis[i].style.background = "#e0e0e0";
	}
  }
}
/*
This will show the trash on hover and hide on exit
in addition it adjusts the text indents
*/
function showTrash () {
  $("li").hover(function() {
	$(this).children().fadeIn('fast', function() {
	});
	$(this).css('text-indent', '0px');
	}, function() {
		$(this).children().fadeOut('fast', function() {
		   $(this).parent().css('text-indent', '15px');
		});
	});
}
//--------------------------------------------------------------
/*this will color all the lis in alternating colors*/
colorlis();

showTrash();

//event listener for trash
$("span").on('click', function(event) {
  $(this).parent().fadeOut('500', function() {
	$(this).remove();
	colorlis();
  });
});

//event listener for plus
$("h1 i").on('click', function(event) {
  $("input").fadeToggle('500', function() {
  });
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
	$("ul").append('<li><span hidden class="btn"><i class="fa fa-trash-alt"></i></span>' + task +'</li>');
	//add the trash 
	showTrash();
	//color the li
	colorlis();
	//add new listener for trash
	$("span").last().on('click', function(event) {
	  $(this).parent().fadeOut('500', function() {
		$(this).remove();
		colorlis();
	  });
	});
  }
});

