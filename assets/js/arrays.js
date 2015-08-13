var animals = ["cat", "dog", "monkey", "elephant", "horse", "cow", "goat", "sheep", "pig", "cheetah", "cougar", "lion"];
var index = -2;
var length = animals.length


<script>
while(index < 12){
	index += 2
	console.log(animals[index])
}	
</script>

<script>
for (var index = 1; index < length; index += 2){
	console.log(animals[index])
}
</script>