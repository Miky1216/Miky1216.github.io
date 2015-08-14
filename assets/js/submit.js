$("#hideMessage").click(function() {
	$("#message").hide();
});

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
			$("#feedback").html("Herb is 35 years old and his birthday is 01/25/1980 and he enjoys herb gardening.");
			break;
		case "Nancy":
			$("#feedback").html("Nancy is 70 years old and her birthday is 04/15/1945 and she enjoys nunning.");
			break;
		case "Lily":
			$("#feedback").html("Lily is 23 years old and her birthday is 10/30/1992 and she enjoys catching frogs.");
			break;
		case "Ralph":
			$("#feedback").html("Ralph is 0 years old and he will be born on 07/07/2016 and he will enjoy ralphing.");
			break;
		default:
			$("#feedback").html("Person " + firstname + " doesn't exist!");
			break;
	}
});





