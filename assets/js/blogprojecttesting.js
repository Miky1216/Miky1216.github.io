function pager(){
	
	
}

function getselection(){
	
	
}

$("#button").click(function() {
	$("#.para").append("1 ");
	
});



$(document).ready(getblog){
	function getblog(){
		$.getJSON("https://github.com/Miky1216/Miky1216.github.io/blob/master/entries.json", function(data){
	$.each(data.posts, function(key, val) {
		
		});
	}
})

$.ajax({
	url: "http://miky1216.github.io/entries.json",
	dataType: "json",
	type: "get",
	cache: false,
	success: function(data){
		$(data.entries).each(function(key, val) {
			console.log(val)
		});
	}
});

<div id='key' class='col-sm-12 blogpost'> 
  <small>
    <p class='muted' style='float:right;'>Post date will go here.</p>
  </small>
  <h5>Post title will go here.</h5>
  <p>Post content will go here.</p>
  <hr/>
</div>

var blogFormat="";
			blogFormat += "<div id = 'key' class = 'col-sm-12 blogpost'> ";
			blogFormat +=   "<small>";
			blogFormat +=     "<p class = 'muted' style = 'float:right;'>date</p>";
			blogFormat +=   "</small>";
			blogFormat +=   "<h5>title</h5>";
			blogFormat +=   "<p>text<\/p>";
			blogFormat +=   "<hr/>";
			blogFormat += "</div>";
			
var htmljQuery = $("<div id = 'key' class = 'col-sm-12 blogpost'>" + "<small>" + "<p class = 'muted' style = 'float:right;'>date</p>" + "</small>" + "<h5>title</h5>" + "<p>text</p>" + "hr/>" + "</div>");

var htmljQuery = $("<div id = 'key' class = 'col-sm-12 blogpost'> <small> <p class = 'muted' style = 'float:right;'>" + $("#date").append + "</p> </small> <h5>" + $("#title").append + "</h5> <p>" $("#text").append + "</p> hr/> </div>");

var htmljQuery = $("<div id = 'key' class = 'col-sm-12 blogpost'> <small> <p class = 'muted' style = 'float:right;'>"); + $("#date").append() + "</p> </small> <h5>"); + $("#title").append() + "</h5> <p>"); + $("#text").append() + "</p> hr/> </div>");
