$(document).ready(function(getblog){
	function getblog(){
		$.getJSON("entries.json", function(data){
			alert(data.start.count);
		});
});
