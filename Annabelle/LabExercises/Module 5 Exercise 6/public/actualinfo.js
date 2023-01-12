fetch('/dogs')
.then((data)=>{
	//console.log(data);
	return data.json()
}).then((completedata)=>{
	console.log(completedata);
	let cardData="";
	completedata.dogs.map((values)=>{
		cardData+=`<div class="card">
		<img src=${values.image.url} alt="img" class="images"></img>
		<h1 class="name">${values.name}</h1>
		<p class="bred_for">Purpose: ${values.bred_for} </p>
		<p class="breed_group">Breed group: ${values.breed_group}</p>
		<p class="temperament">Temperament: ${values.temperament}</p>
	  </div>`
	});
	document.getElementById("cards").innerHTML=cardData;

}).catch((err)=>{
	console.log(err)
});


function myFunction() {
	var input, filter, cards, cardContainer, title, i;
	input = document.getElementById("myFilter");
	filter = input.value.toUpperCase();
	cardContainer = document.getElementById("myCards");
	cards = cardContainer.getElementsByClassName("card");
	for (i = 0; i < cards.length; i++) {
	  title = cards[i].querySelector(".name");
	  if (title.innerText.toUpperCase().indexOf(filter) > -1) {
		cards[i].style.display = "";
	  } else {
		cards[i].style.display = "none";
	  }
	}
  }