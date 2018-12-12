
$(".first").html(getImageData(0));
$(".middle").html(getImageData(3));
$(".last").html(getImageData(6));
$(".ex1").html(getData());


// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var startValue;

// Dynamic image loading 
function getImageData (count) {
	var list = "";
	for (var startValue = 1; startValue <= 2; startValue++) {		   			
			var path = "images/image"+(startValue + count )+".jpg";
			list += '<a href='+path+'>'+'<div class="focusable">'+'<img class="imgSize" src='+path+'>'+'</div>'+'</a>';
	 }
	return list;
};
	
// Full-width images
function getData() {
	var list = "<ul>";
	for (var startValue = 1; startValue <= 9; startValue++) {		   			
			var path = "images/image"+(startValue)+".jpg";
			list += '<li>'+'<a href='+path+'>'+'<div class="focusable">'+'<img class="imgSize1" src='+path+'>'+'</div>'+'</a>'+'</li>';
	 }
	 list += "</ul>";
	return list;
  SpatialNavigation.focus();
}

// Two images side by side
function two() {
  for (startValue = 0; startValue < elements.length; startValue++) {
    elements[startValue].style.msFlex = "33%";  // Mozilla, IE10
    elements[startValue].style.flex = "33%";
  }
  $(".gridView").removeClass("hidden");
  $(".listView").addClass("hidden");
  SpatialNavigation.focus();
}

function one() {
  $(".gridView").addClass("hidden");
  $(".listView").removeClass("hidden");
  SpatialNavigation.focus();
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var startValue = 0; startValue < btns.length; startValue++) {
  btns[startValue].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

two();

$('.focusable').on('sn:enter-down', function() {
  })
  .on('sn:enter-up', function() {
	var url = this.children[0].src;
	if(!!url){		
		window.open(url);
	}
});		  

$(document).on('keypress', function(e) {
   var tag = e.key;
   if(tag == 'r'){
		 if($(".footer1").hasClass("footerColor")){
			 $(".footer").removeClass("footerColor");
      		 $(".footer2").addClass("footerColor");
		 }
		 else{
			  $(".footer").removeClass("footerColor");
      		 $(".footer3").addClass("footerColor");
		 }		 
   }
   else if(tag == 'l'){
	    if($(".footer3").hasClass("footerColor")){
			 $(".footer").removeClass("footerColor");
      		 $(".footer2").addClass("footerColor");
		 }
		 else{
			  $(".footer").removeClass("footerColor");
      		 $(".footer1").addClass("footerColor");
		 }
	   
   }
});