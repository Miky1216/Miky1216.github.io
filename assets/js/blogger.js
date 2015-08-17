$(document).ready(getblog);
	function getblog(){
		$.getJSON("http://miky1216.github.io/entries.json", function(data){
		$.each(data.entries, function(key, value) {
		var htmljQuery = $("<div id = 'key' class = 'col-sm-12 blogpost'> <small> <p class = 'muted' style = 'float:right;'>" + value["date"] + "</p> </small> <h5>" + value["title"] + "</h5> <p>" + value["text"] + "</p></div>");
		$("#key").append(htmljQuery);
		});
	});
};

function pager(){
	var postsPerPage = 5;
	var postsPerPage2 = 10;
	var postsPerPage3 = 15;
	
	
	
}

$(document).ready( function(){
	$.select("pageButtons")
		$("pageButtons").append("<li id = 'pageOne'><a href = '#'>" + key + 1 + "</a></li>");
		$("pageButtons").append("<li id = 'pageOne'><a href = '#'>" + key + 2 + "</a></li>");
		$("pageButtons").append("<li id = 'pageOne'><a href = '#'>" + key + 3 + "</a></li>");
});;
