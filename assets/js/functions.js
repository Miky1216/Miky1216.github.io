function person(name, age, birthday, hobby){
	this.name = name;
	this.age = age;
	this.birthday = birthday;
	this.hobby = hobby;
}

function about(name){
	var father = new person("Herb", 35, "01/25/1980", "herb gardening");
	var mother = new person("Nancy", 70, "04/15/1945", "nunning");
	var daughter = new person("Lily", 23, "10/30/1992", "catching frogs");
	var son = new person("Ralph", 0, "07/07/2016", "ralphing");
	
	var familyMemberName = prompt("Which family member would you like information about?")

	switch(familyMemberName){
		case "Herb":
			console.log(father.name + " is " + father.age + " years old and his birthday is " + father.birthday + " and he enjoys " + father.hobby);
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
			console.log(familyMemberName)
			break;
	}
}
about();

