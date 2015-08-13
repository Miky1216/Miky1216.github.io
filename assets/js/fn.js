// return the current time as a string in this format:
// hours : minutes : seconds
// hours should be based on a 24 hours clock (display 22 for 10pm)
// seconds should have a single decimal. round to the nearest 1/10 of a second.
// example string: 16 : 34 : 12.5
// declare a variable name currTime
// call the gettime function and store the value returned as currTime
// print the currTime variable to console.log
function gettime(){
	var currentTime = new Date();  
	
	var hoursDisplay = currentTime.getHours();
	var minutesDisplay = currentTime.getMinutes();
	var secondsDisplay = currentTime.getSeconds();
	var millisecondsDisplay = currentTime.getMilliseconds();
	
	todayTime = (hoursDisplay + ":" + minutesDisplay + ":" + (secondsDisplay) + "." + Math.round(millisecondsDisplay/100));
	return todayTime;
}	
function debuger(){
	var currTime = gettime();
	console.log(currTime);
}
debuger();

$("#validateAnswersToQuestions").click(function validate(){
	var firstQuestion = $("#questionOne").val();
	switch (firstQuestion){
		case "":
			$("#feedbackOne").html("You need to answer the question!")
			break;
		default:
			$("#feedbackOne").html("Question #1 validated!")
	}
	var secondQuestion = $("#questionTwo").val();
	switch (secondQuestion){
		case "":
			$("#feedbackTwo").html("You need to answer the question!")
			break;
		default:
			$("#feedbackTwo").html("Question #2 validated!")
	}
	var thirdQuestion = $("#questionThree").val();
	switch (thirdQuestion){
		case "":
			$("#feedbackThree").html("You need to answer the question!")
			break;
		default:
			$("#feedbackThree").html("Question #3 validated!")
	}
	var fourthQuestion = $("#questionFour").val();
	switch (fourthQuestion){
		case "":
			$("#feedbackFour").html("You need to answer the question!")
			break;
		default:
			$("#feedbackFour").html("Question #4 validated!")
	}
	var fifthQuestion = $("#questionFive").val();
	switch (fifthQuestion){
		case "":
			$("#feedbackFive").html("You need to answer the question!")
			break;
		default:
			$("#feedbackFive").html("Question #5 validated!")
	}
	var sixthQuestion = $("#questionSix").val();
	switch (sixthQuestion){
		case "":
			$("#feedbackSix").html("You need to answer the question!")
			break;
		default:
			$("#feedbackSix").html("Question #6 validated!")
	}
	var seventhQuestion = $("#questionSeven").val();
	switch (seventhQuestion){
		case "":
			$("#feedbackSeven").html("You need to answer the question!")
			break;
		default:
			$("#feedbackSeven").html("Question #7 validated!")
	}
});

