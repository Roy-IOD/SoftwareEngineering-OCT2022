const imageElement = document.querySelector("#dog-pic");

const dogButton = document.querySelector("#randomDog");

dogButton.addEventListener("click", function () {
  fetch("https://random.dog/woof.json?ref=apilist.fun")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const imageUrl = data.url;
      return (imageElement.src = imageUrl);
    });
});

const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_65d482219d.mp3?filename=pug-woof-2-103762.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click",
  function() {
    audio.play();
  });
});

