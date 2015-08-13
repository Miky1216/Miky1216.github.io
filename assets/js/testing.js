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
