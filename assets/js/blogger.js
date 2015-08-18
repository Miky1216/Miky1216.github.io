$(document).ready(getblog);
var currentPage = 0;
var totalPosts = 0;
function getblog(){
	$.getJSON("http://miky1216.github.io/entries.json", function(data){
		$.each(data.entries, function(key, value){	
			var post = "<div id = '" + key + "' class = 'col-sm-12 blogpost'>";
			post += "<small> <p class = 'muted' style = 'float:right;'>" + value["date"] + "</p> </small>";
			post += " <h5>" + value["title"] + "</h5>";
			post += " <p>" + value["text"] + "</p>";
			post += "</div>";
			$("#posts").append(post);
			totalPosts++;
			pager(0);
		});
	});
	getselection();
};
	
function pager(index){	
	var post = index;
	var ceiling = post + 5;
	$(".blogpost").hide();
	while (post < ceiling){
		$("#" + post).show();
		post++;
	}
	if (index == 0){
		$("#previous").hide();
	} else {
		$("#previous").show();
	}
	if (ceiling > totalPosts){
		$("#next").hide();
	} else {
		$("#next").show();
	}
};
	$("#next").on("click", function(){
		pager(currentPage+5);
		currentPage+=5;
	});
	$("#previous").on("click", function(){
		pager(currentPage-5);
		currentPage-=5;
	});

function getselection(){
	var searchBar = $("#search2")
	$("#search2").keyup(function selection(){
		$("#hideNameAttendance").hide();
		$("#interests").hide();
		$("#interestsExplained").hide();
		$("#headerBlog").hide();
		$("#posts").hide();
	})
	$("#search2").keyup(function(reappear){
		if (reappear.keyCode == 8){
			$("#hideNameAttendance").show();
			$("#interests").show();
			$("#interestsExplained").show();
			$("#headerBlog").show();
			$("#posts").show();	
		}
	})
};