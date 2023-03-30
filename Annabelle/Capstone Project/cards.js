fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
.then((data)=>{
	//console.log(data);
	return data.json()
}).then((completedata)=>{
	//console.log(completedata[2].name);
	let cardData="";
	completedata.map((values)=>{
		cardData+=`<div class="card">
		<img src=${values.image_link.url} alt="img" class="images"></img>
		<h1 class="name">${values.name}</h1>
        <p class="brand_name">: ${values.brand_name} </p>
		<p class="description">: ${values.description} </p>
		<p class="category">: ${values.category}</p>
		<p class="price">: ${values.price}</p>
	  </div>`
	});
	document.getElementById("cards").innerHTML=cardData;

}).catch((err)=>{
	console.log(error)
});
