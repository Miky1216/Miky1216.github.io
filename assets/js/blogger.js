$(document).ready(getblog);
	function getblog(){
		$.getJSON("http://miky1216.github.io/entries.json", function(data){
		$.each(data.entries, function(key, value) {
		//console.log(value);
		var htmljQuery = $("<div id = 'key' class = 'col-sm-12 blogpost'> <small> <p class = 'muted' style = 'float:right;'>"+value["date"] + "</p> </small> <h5>" + value["title"] + "</h5> <p>" + value["text"] + "</p></div>");
		var blogFormat = htmljQuery.prop("outerHTML");
		$("#key").append(htmljQuery)
		});
	});
};

function pager(){
	
	
}

function getselection(){
	
	
}

