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





