var motherNextBirthday = new Date("April 15, 2016");
displayTimeUntilNextBirthday(motherNextBirthday);
var daughterNextBirthday = new Date("October 30, 2015");
displayTimeUntilNextBirthday(daughterNextBirthday);


var motherNextBirthday = new Date("April 15, 2016");
var timeLeftMother = (motherNextBirthday.getTime() - today.getTime());
var calcMonthsLeftMother = timeLeftMother/ msPerMonth;
var monthsLeftMother = Math.floor(calcMonthsLeftMother);
var calcDaysLeftMother = timeLeftMother / msPerDay;   
var daysLeftMother = Math.floor(calcDaysLeftMother);  
var calcHrsLeft = (calcDaysLeftMother - daysLeftMother)*24; ((millisecondsUntilNextBirthday / millisecondsPerMonth) - (Math.floor(millisecondsUntilNextBirthday / millisecondsPerMonth))*30

var daughterNextBirthday = new Date("October 30, 2015");
var timeLeftDaughter = (daughterNextBirthday.getTime() - today.getTime());
var calcMonthsLeftDaughter = timeLeftDaughter / msPerMonth;
var monthsLeftDaughter = Math.floor(calcMonthsLeftDaughter);
var calcDaysLeftDaughter = timeLeftDaughter / msPerDay;
var daysLeftDaughter = Math.floor(calcDaysLeftDaughter);
var calcHrsLeft = (calcDaysLeftDaughter - daysLeftDaughter)*24;

console.log(mother.name + " is " + mother.age + " years old and her birthday is " + mother.birthday + " and she enjoys " + mother.hobby + ". Nancy's next birthday is in " + monthsLeftMother + " months, " + daysLeftMother + " days, " + hrsLeft + " hours, " + minsLeft + " minutes, and " + secsLeft + " seconds.")
console.log(daughter.name + " is " + daughter.age + " years old and her birthday is " + daughter.birthday+ " and she enjoys " + daughter.hobby + ". Lily's next birthday is in " + monthsLeftDaughter + " months, " + daysLeftDaughter + " days, " + hrsLeft + " hours, " + minsLeft + " minutes, and " + secsLeft + " seconds.")
console.log(son.name + " is " + son.age + " years old and he will be born on " + son.birthday + " and he will enjoy " + son.hobby)


	var familyMemberName = prompt("Which family member would you like information about?")
	switch(familyMemberName){
		case "Herb":
			console.log(father.name + " is " + father.age + " years old and her birthday is " + father.birthday + " and she enjoys " + father.hobby);
			break;
		case "Nancy":
			console.log(mother.name + " is " + mother.age + " years old and her birthday is " + mother.birthday + " and she enjoys " + mother.hobby);
			break;
		case "Lily":
			console.log(daughter.name + " is " + daughter.age + " years old and her birthday is " + daughter.birthday+ " and she enjoys " + daughter.hobby);
			break;
		case "Ralph":
			console.log(son.name + " is " + son.age + " years old and he will be born on " + son.birthday + " and he will enjoy " + son.hobby);
			break;
		default:
			console.log("name")
			break;
	}
}

<form>
First name of family member:<br>
<input type = "text" name = "firstname">
<br>
<button type = "button">Submit</button>
</form>

<input id = "file" type = "file"/>
<input id = "submit" type = "submit" value = "upload"/>

<form action = "#" method ="post" enctype = "multipart/form-data">
First name of family member:<br>
<input type = "text" name = "firstname">
<br>
<input type = "submit" value = "Submit" id = "submit"/>
</form>

// FROM SUBMIT.JS... Need to define them but for some reason it isn't working when I do
$("#familyMemberInfo").click(function person(name, age, birthday, hobby){
	this.name = name;
	this.age = age;
	this.birthday = birthday;
	this.hobby = hobby;
});
$("#familyMemberInfo").click(function about(name){
	var father = ("Herb", 35, "01/25/1980", "herb gardening");
	var mother = ("Nancy", 70, "04/15/1945", "nunning");
	var daughter = ("Lily", 23, "10/30/1992", "catching frogs");
	var son = ("Ralph", 0, "07/07/2016", "ralphing");
	
	var firstname = $("#firstname").val();
	
	switch(firstname){
		case "Herb":
			$("#feedback").html("Herb is 35 years old and his birthday is 01/25/1980 and he enjoys herb gardening");
			break;
		case "Nancy":
			$("#feedback").html(mother.name + " is " + mother.age + " years old and her birthday is " + mother.birthday + " and she enjoys " + mother.hobby);
			break;
		case "Lily":
			$("#feedback").html(daughter.name + " is " + daughter.age + " years old and her birthday is " + daughter.birthday+ " and she enjoys " + daughter.hobby);
			break;
		case "Ralph":
			$("#feedback").html(son.name + " is " + son.age + " years old and he will be born on " + son.birthday + " and he will enjoy " + son.hobby);
			break;
		default:
			$("#feedback").html("Person " + firstname + " doesn't exist!");
			break;
	}
});

// FOR BLOG PROJECT
<ul id = "myPager" class = "pagination">
	<li><a id = "previous">Previous</a></li>
	<li><a id = "pageOne"href="http://miky1216.github.io/">1</a></li>
	<li><a id = "pageTwo">2</a></li>
	<li><a id = "pageThree">3</a></li>
	<li><a id = "pageFour">4</a></li>
	<li><a id = "pageFive">5</a></li>
	<li><a id = "next">Next</a></li>
</ul>

function pager(){
	var itemsPerPage = 5
	var itemsToPaginate = htmljQuery / itemsPerPage
	
	$("#pageOne").onClick()
	
<ul id = "myPager" class = "pagination">
	<li class = "disabled"><a href = "#"><span aria-hidden = "true">&laquo;</span><span class = "sr-only">Previous</span></a></li>
	<li class = "active"><a href = "#">1</a></li>
	<li><a href = "#">2</a></li>
	<li><a href = "#">3</a></li>
	<li><a href = "#">4</a></li>
	<li><a href = "#">5</a></li>
	<li><a href = "#"><span aria-hidden = "true">&raquo;</span><span class = "sr-only">Next</span></a></li>
</ul>

<ul id = "myPager" class = "pagination">
	<li class = "disabled"><a href = "#"><span aria-hidden = "true">&laquo;</span><span class = "sr-only">Previous</span></a></li>
	<li class = "active"><a href = "#">1</a></li>
	<li><a href = "#">2</a></li>
	<li><a href = "#">3</a></li>
	<li><a href = "#">4</a></li>
	<li><a href = "#">5</a></li>
	<li><a href = "#"><span aria-hidden = "true">&raquo;</span><span class = "sr-only">Next</span></a></li>
</ul>
pageSize = 3;

showPage = function(page) {
    $(".pagination").hide();
    $(".pagination").each(function(pager) {
        if (pager >= pageSize * (page - 1) && pager < pageSize * page)
            $(this).show();
    });        
}
    
showPage(1);

$("#myPager li a").click(function() {
    $("#myPager li a").removeClass("active");
    $(this).addClass("active");
    showPage(parseInt($(this).text())) 
});

var currentpage = 1;
var pagecount = 0;

function showpage(page) {
    $('#key').hide();
    $('#key').eq((page-1)*5).show().next().show().next().show().next().show().next().show().next().show();
    $('#myPager').find('a').removeClass('current').eq(page).addClass('current');

}

$("#myPager").on("click", "a", function(event){
    event.preventDefault();
    if($(this).html() == "next") {
        currentpage++;
    }
    else if($(this).html() == "prev") {
        currentpage--;
    } else {
            currentpage = $(this).html();
    }
    if(currentpage < 1) {currentpage = 1;}
    if(currentpage > pagecount) {currentpage = pagecount;}
    showpage(currentpage);
});                                                                  

$(document).ready(function() {
    pagecount = Math.floor(($('#key').size()) / 5);
    if (($('#key').size()) % 5 > 0) {
        pagecount++;
    }

    $('#myPager').html('<li><a>prev</a></li>');
    for (var i = 1; i <= pagecount; i++) {
        $('#myPager').append('<li><a class="current">' + i + '</a></li>');
    }
    $('#myPager').append('<li><a>next</a></li>');
    showpage(1);

});​

$("myPager").click(function pager(value){
	var itemsPerPage = 5;
	var blogEntries = "http://miky1216.github.io/entries.json"
	var itemsToPaginate =  blogEntries / itemsPerPage;
	console.log(itemsToPaginate)
	var currentPage = 1;
	var pageCount = 0;
	
	currentPage.show()
	
	pagecount = Math.floor(($('#key').length()) / 5);
    if (($('#key').length()) % 5 > 0) {
        pagecount++;
    }
	$("pageOne").show()
});	


$(document).ready(getselection){
	function getselection(){
		var search = $("searchCriteria");
		var items = $(".pagination")
	$("search2").on("click", function(event){
		var searchValue = search.val();
			if (searchValue == ""){
				items.show()
				return;
			}
		$.each(items, function(){
			var 
		}
	}
	
}

//http://stackoverflow.com/questions/10034724/simple-jquery-pagination
//https://www.youtube.com/watch?v=3GXspIuEDb0


$('#myPager').pagination(100,{callback:function(page,component){
    console.info(page);
}})
jQuery.fn.pagination = function(maxentries, opts){
    opts = jQuery.extend({
        items_per_page:5,
        num_display_entries:10,
        current_page:0,
        num_edge_entries:0,
        link_to:"javascript:void(0)",
        first_text:"First",
        last_text:"Last",
        prev_text:"Prev",
        next_text:"Next",
        ellipse_text:"...",
        prev_show_always:true,
        next_show_always:true,
        callback:function(){return false;}
    },opts||{});

    return this.each(function() {
        /**
         * Calculate the maximum number of pages
         */
        function numPages() {
            return Math.ceil(maxentries/opts.items_per_page);
        }

        /**
         * Calculate start and end point of pagination links depending on 
         * current_page and num_display_entries.
         * @return {Array}
         */
        function getInterval()  {
            var ne_half = Math.ceil(opts.num_display_entries/2);
            var np = numPages();
            var upper_limit = np-opts.num_display_entries;
            var start = current_page>ne_half?Math.max(Math.min(current_page-ne_half, upper_limit), 0):0;
            var end = current_page>ne_half?Math.min(current_page+ne_half, np):Math.min(opts.num_display_entries, np);
            return [start,end];
        }

        /**
         * This is the event handling function for the pagination links. 
         * @param {int} page_id The new page number
         */
        function pageSelected(page_id, evt){
            current_page = page_id;
            drawLinks();
            var continuePropagation = opts.callback(page_id, panel);
            if (!continuePropagation) {
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                }
                else {
                    evt.cancelBubble = true;
                }
            }
            return continuePropagation;
        }

        /**
         * This function inserts the pagination links into the container element
         */
        function drawLinks() {
            panel.empty();
            var list = jQuery("<ul></ul>");
            panel.append(list);

            var interval = getInterval();
            var np = numPages();
            // This helper function returns a handler function that calls pageSelected with the right page_id
            var getClickHandler = function(page_id) {
                return function(evt){ return pageSelected(page_id,evt); }
            }
            // Helper function for generating a single link (or a span tag if it's the current page)
            var appendItem = function(page_id, appendopts){
                page_id = page_id<0?0:(page_id<np?page_id:np-1); // Normalize page id to sane value
                appendopts = jQuery.extend({text:page_id+1, classes:""}, appendopts||{});
                if(page_id == current_page){
                    var clazz = appendopts.side ? 'disabled' : 'active';
                    var lstItem = jQuery("<li class='"+clazz+"'><a>"+(appendopts.text)+"</a></li>")
                }
                else
                {
                    var a = jQuery("<a>"+(appendopts.text)+"</a>")
                        .attr('href', opts.link_to.replace(/__id__/,page_id));;
                    var lstItem = jQuery("<li></li>")
                        .bind("click", getClickHandler(page_id));
                    lstItem.append(a);
                }
                if(appendopts.classes){lstItem.addClass(appendopts.classes);}
                list.append(lstItem);
            }
            // Generate "Previous"-Link
            if(opts.prev_text && (current_page > 0 || opts.prev_show_always)){
                appendItem(0, { text: opts.first_text, side: true });
                appendItem(current_page-1,{text:opts.prev_text, side:true});
            }
            // Generate starting points
            if (interval[0] > 0 && opts.num_edge_entries > 0)
            {
                var end = Math.min(opts.num_edge_entries, interval[0]);
                for(var i=0; i<end; i++) {
                    appendItem(i);
                }
                if(opts.num_edge_entries < interval[0] && opts.ellipse_text)
                {
                    jQuery("<li class='disabled'>"+opts.ellipse_text+"</li>").appendTo(list);
                }
            }
            // Generate interval links
            for(var i=interval[0]; i<interval[1]; i++) {
                appendItem(i);
            }
            // Generate ending points
            if (interval[1] < np && opts.num_edge_entries > 0)
            {
                if(np-opts.num_edge_entries > interval[1]&& opts.ellipse_text)
                {
                    jQuery("<li class='disabled'>"+opts.ellipse_text+"</li>").appendTo(list);
                }
                var begin = Math.max(np-opts.num_edge_entries, interval[1]);
                for(var i=begin; i<np; i++) {
                    appendItem(i);
                }

            }
            // Generate "Next"-Link
            if(opts.next_text && (current_page < np-1 || opts.next_show_always)){
                appendItem(current_page+1,{text:opts.next_text, side:true});
                appendItem(np - 1, { text: opts.last_text, side: true });
            }
        }

        // Extract current_page from options
        var current_page = opts.current_page;
        // Create a sane value for maxentries and items_per_page
        maxentries = (!maxentries || maxentries < 0)?1:maxentries;
        opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0)?1:opts.items_per_page;
        // Store DOM element for easy access from all inner functions
        var panel = jQuery(this);
        // Attach control functions to the DOM element 
        this.selectPage = function(page_id){ pageSelected(page_id);}
        this.prevPage = function(){ 
            if (current_page > 0) {
                pageSelected(current_page - 1);
                return true;
            }
            else {
                return false;
            }
        }
        this.nextPage = function(){ 
            if(current_page < numPages()-1) {
                pageSelected(current_page+1);
                return true;
            }
            else {
                return false;
            }
        }
        // When all initialisation is done, draw the links
        drawLinks();
        // call callback function
        //opts.callback(current_page, this);
    });
}

//HTML
<ul class = "pagination">
	<li class = "disabled"><a href = "previous">Previous</a></li>
	<li id = "pageOne"><a href="http://miky1216.github.io/">1</a></li>
	<li id = "pageTwo"><a href = "#">2</a></li>
	<li id = "pageThree"><a href = "#">3</a></li>
	<li><a href = "next">Next</a></li>
</ul>

<ul class = "pagination">
	<li id = "previousPage" class = "disabled"><a href = "previous">Previous</a></li>
	<li id = "pageOne"><a href="http://miky1216.github.io/#pageOne">1</a></li>
	<li id = "pageTwo"><a href = "http://miky1216.github.io/#pageTwo">2</a></li>
	<li id = "pageThree"><a href = "http://miky1216.github.io/#pageThree">3</a></li>
	<li id = "nextPage"><a href = "next">Next</a></li>
</ul>	

		//var postsPerPage = 5;
		//var postsToPaginate = value / postsPerPage;
		//return postsToPaginate;

$(document).ready( function(key, value){
	$.select = $("pageButtons")
		$("#pageButtons").append("<li id = '" + key + "'>" + value + "</li>");
		$("#pageButtons").append("<li id = 'pageTwo'><a href = '#'>" + "key" + key + "</a></li>");
		$("#pageButtons").append("<li id = 'pageThree'><a href = '#'>" + "key" + key + "</a></li>");
});;

$("#pageOne").append(key[0,4])
$("#pageTwo").append("")
$("#pageThree").append("")


$("#pageButtons").append("<li id = page1><a href = '#'>" + 'Page1' + "</li>") && $("#pageButtons").append("<li id = page2><a href = '#'>" + 'Page2' + "</li>") && $("#pageButtons").append("<li id = page3><a href = '#'>" + 'Page3' + "</li>") && $("#pageButtons").append("<li id = next><a href = '#'>" + 'Next' + "</li>");
