$(document).ready(getblog);
	function getblog(){
		$.getJSON("entries.json", function(data){
		$each(data.entries, function(key, value){
		console.log("hello world")
		})
	})
}
function pager(){
	
	
}

function getselection(){
	
	
}