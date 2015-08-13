var animal = "cat";
var noise = "meow";
var dog = "Im a dog. I mean... woof";
var cat = "Im a cat. I mean, uhh meow";

<script>
if (noise == "woof" && animal == "dog"){
	console.log(dog)
}	else if (noise == "meow" && animal == "cat"){
		console.log(cat)
}		else{
			console.log("I don't know what kind of animal this is")
}
</script>

<script>
switch(noise)
{
	case "woof":
		console.log(dog);
		break;
	case "meow":
		console.log(cat);
		break;
	default: 
		console.log("I don't know what kind of animal this is");
		break;
}		
</script>