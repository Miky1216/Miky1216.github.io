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

$(document).ready(pager);
	function pager(key, value){
		$("#pageButtons").append("hello");
		$("#pageButtons").append("<li id = page" + key + ">" + key + "</li>");
		$("#pageButtons").append(htmljQuery);
		$("#pageButtons").append("<li id = 'previous></li>");
		$("#pageButtons").append("<li id = 'page1'>" + key + "</a></li>");
		$("#pageButtons").append("<li id = 'page2'>" + key + "</a></li>");
		$("#pageButtons").append("<li id = 'page3'>" + key + "</a></li>");
		$("#pageButtons").append("<li id = 'page1'>" + key + "</a></li>");

		$("#pageButtons").append("hello");
	;
}


// WORKING PROJECT
$(document).ready(getblog);
	function getblog(){
		$.getJSON("http://miky1216.github.io/entries.json", function(data){
		$.each(data.entries, function(key, value){	
		var htmljQuery = $("<div id = 'key' class = 'col-sm-12 blogpost'> <small> <p class = 'muted' style = 'float:right;'>" + value["date"] + "</p> </small> <h5>" + value["title"] + "</h5> <p>" + value["text"] + "</p></div>");
		pager(key);
		$("#key").append(htmljQuery);
		});
	});
};


$(document).ready(pager);
	var pageCount = 0;
	function pager(){
		$("#pageButtons").append("<li id = next><a href = '#'>" + 'Next' + "</li>");
		$("#pageButtons").append("<li id = page1><a href = '#'>" + 'Page1' + "</li>");
			if (key < 5)
				pageCount++;
		$("#pageButtons").append("<li id = page2><a href = '#'>" + 'Page2' + "</li>");
			if (key > 4 && key < 10)
				pageCount++;
		$("#pageButtons").append("<li id = page3><a href = '#'>" + 'Page3' + "</li>");
			if (key > 9 && key < 15)
				pageCount++;
		$("#pageButtons").append("<li id = previous><a href = '#'>" + 'Previous' + "</li>");
		
	}
	
// FOR PAGINATION
		while (key < 5){
			key += 1
			$("#pageButtons").append(htmljQuery)
		} 
			if (value >= key && value < (key + 5))
				$("#pageButtons").append(htmljQuery)
		};
		
		
	
$(document).ready(pager);
	function pager(key, value, htmljQuery){
		var h = $("<div id = 'key' class = 'col-sm-12 blogpost'> <small> <p class = 'muted' style = 'float:right;'>" + "08/16/2015" + "</p> </small> <h5>" + "Blog Project" + "</h5> <p>" + "Future blog posts will be written detailing the progress on various projects during the 12-week period." + "</p></div>");
		$("#next").on("click", function() {
			if (key < 5)
				$("#pageButtons").append(h);
		console.log("hello");
		});
		$("#previous").on("click", function() {
			$("#pageButtons").append("")
			console.log("hello");
		});
		/*$(document).ready(pager);
	function pager(key, entries){
		if (key < 5 && key % 5 == 0)
			//$("#pageButtons").append("<li id = page1>" + 'Page1 ' + 'Page2 ' + 'Page3 ' + 'Next ' + "</li>");
			//return firstFive;
		if (key > 4 && key < 10 && key % 5 == 0)
			//$("#pageButtons").append("<li id = page2>" + 'Previous ' + 'Page1 ' + 'Page2 ' + 'Page3 ' + 'Next ' + "</li>");
			//return secondFive;
		if (key > 9 && key % 5 == 0)
			//$("#pageButtons").append("<li id = page3>" + 'Previous ' + 'Page1 ' + 'Page2 ' + 'Page3 ' + "</li>");
			//return thirdFive;
		if (key > 14 && key % 5 == 0)
			//$("#pageButtons").append("<li id = page4>" + 'Previous ' + 'Page1 ' + 'Page2 ' + 'Page3 ' + 'Page4 ' + "</li>");
			//return fourthFive;
	
		//$("#postingBlogEntries").click(function nextPage(){
			//if (key > 4 && key < 10 && key % 5 == 0)
				//$("#pageButtons").show();
			//if (key > 9 && key < 15 && key % 5 == 0)
			//	$("#pageButtons").show();
			//if (key > 14 && key % 5 == 0)
			//	$("#pageButtons").show();
		//})	
		//$("#postingBlogEntries").click(function previousPage(){
			//if (key < 5 && key % 5 == 0)
				//$("previous").hide();
		//})
	
	
	//function nextFive(){
		//$("#postingBlogEntries").click(function nextPage(){
			//if (key > 4 && key < 10 && key % 5 == 0)
				//pageButtons").show(key[0,1,2,3,4]);
		
	// make entries coincide with other parameters (use division)
	// put if statement in first loop so not everything gets looped through. Meet parameters
	// Pages show with correct 5 entries
		// first five, next five, next five
	// onClick for Page buttons*/
		//make table for buttons in html?
		// if page1 clicked, .show() on the buttons */

// SEARCH FUNCTIONALITY

		//var entries = JSON.parse(entriesString);
		
function findselection(){
	$.getJSON("http://miky1216.github.io/entries.json", function(data){
		var searchBar = $("#search2").val();
		var entriesString = JSON.stringify(data);
		//var entries = JSON.parse(entriesString);
		var entriesArray = entriesString.split("},");
		var resultEntriesArray = entriesArray.indexOf("");
		//console.log(searchBar);
		console.log(resultEntriesArray);
		//console.log(entriesString);
		console.log(entriesArray);
		$("#search2").keyup(function(search){
			if (search.keyCode == 13){
				$(entriesArray).find(searchBar);
				console.log(searchBar);
		}	
	})	
})};


function findselection(){
	$.getJSON("http://miky1216.github.io/entries.json", function(data){
		var searchBar = $("#search2").val();
		var entriesString = JSON.stringify(data);
		var entriesArray = entriesString.split("},");
		var resultEntriesArray = entriesArray.indexOf("");
		console.log(resultEntriesArray);
		//console.log(entriesString);
		console.log(entriesArray);
		$("#search2").keyup(function(){
			$(entriesArray).find(searchBar);
			console.log(searchBar);
			return searchBar;
	})	
})};

for (index = 0; index < entriesArray.length; index++){
	$("#searchResults") += entriesArray[index];