function person(name, age, birthday,  hobby){
	this.name = name;
	this.age = age;
	this.birthday = birthday;
	this.hobby = hobby;
}

function convertMillisecondsToMonths(milliseconds){
	var millisecondsPerMonth = 30 * 24 * 60 * 60 * 1000;
	return (milliseconds / millisecondsPerMonth);
}
function convertFractionOfMonthToDays(monthFraction){
	var daysPerMonth = 30;
	return monthFraction * daysPerMonth;
} 
function convertFractionOfDayToHours(dayFraction){
	var hoursPerDay = 24;
	return dayFraction * hoursPerDay;
}
function convertFractionOfHourToMinutes(hourFraction){
	var minutesPerHour = 60;
	return hourFraction * minutesPerHour;
}
function convertFractionOfMinuteToSeconds(minuteFraction){
	var secondsPerMinute = 60;
	return minuteFraction * 60;
}
function displayTimeUntilNextBirthday(nextBirthday, name){
	var today = new Date();
	var millisecondsUntilNextBirthday = (nextBirthday.getTime() - today.getTime());
	var monthsUntilNextBirthday = convertMillisecondsToMonths(millisecondsUntilNextBirthday);
	var remainderOfDaysUntilNextBirthday = convertFractionOfMonthToDays(monthsUntilNextBirthday - Math.floor(monthsUntilNextBirthday));
	var remainderOfHoursUntilNextBirthday = convertFractionOfDayToHours(remainderOfDaysUntilNextBirthday - Math.floor(remainderOfDaysUntilNextBirthday));
	var remainderOfMinutesUntilNextBirthday = convertFractionOfHourToMinutes(remainderOfHoursUntilNextBirthday - Math.floor(remainderOfHoursUntilNextBirthday));
	var remainderOfSecondsUntilNextBirthday = convertFractionOfMinuteToSeconds(remainderOfMinutesUntilNextBirthday - Math.floor(remainderOfMinutesUntilNextBirthday));
	
	var outputString = name + "'s next birthday is in ";
	outputString += Math.floor(monthsUntilNextBirthday) + " months, " + Math.floor(remainderOfDaysUntilNextBirthday) + " days, ";
	outputString += Math.floor(remainderOfHoursUntilNextBirthday) + " hours, " + Math.floor(remainderOfMinutesUntilNextBirthday) + " minutes, and " + Math.floor(remainderOfSecondsUntilNextBirthday) + " seconds.";
	
	console.log(outputString);
}

function main(){
	var father = new person("Herb", 35, new Date("01/25/2016"), "herb gardening");
	var mother = new person("Nancy", 70, new Date("04/15/2016"), "nunning");
	var daughter = new person("Lily", 23, new Date("10/30/2015"), "catching frogs");
	var son = new person("Ralph", 0, new Date("07/07/2016"), "ralphing");
	
	displayTimeUntilNextBirthday(father.birthday, father.name);
	displayTimeUntilNextBirthday(mother.birthday, mother.name);
	displayTimeUntilNextBirthday(daughter.birthday, daughter.name);
	displayTimeUntilNextBirthday(son.birthday, son.name);

	var arrayFamilyMembers = [displayTimeUntilNextBirthday(father.birthday, father.name), displayTimeUntilNextBirthday(mother.birthday, mother.name), displayTimeUntilNextBirthday(daughter.birthday, daughter.name), displayTimeUntilNextBirthday(son.birthday, son.name)];
	var index = 0;
	while (arrayFamilyMembers < 4){
		index += 1
		console.log(arrayFamilyMembers);
	}	
}

main();
