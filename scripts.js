// Define the array of cards
let cards = [
    "A song with a color in the title",
    "A song that features a guitar solo",
    "A song with a number in the title",
    "A song with a female vocalist",
    "A song from a movie soundtrack",
    "A song from the 80s",
    "A song with a dance in the title",
    "A song with a city in the title",
    "A song from a one-hit wonder",
    "A song with a question in the title",
    "A song from a musical",
    "A song with a food or drink in the title",
    "A song with a boy's name in the title",
    "A song with a political message",
    "A song that mentions a famous person",
    "A song from the 70s",
    "A song with a weather reference",
    "A song with a day of the week in the title",
    "A song with a famous sample",
    "A song from a foreign language",
    "A track with an epic drop",
    "A song that makes you cry",
    "A song with a secret message",
    "A song with a mysterious vibe",
    "A song that always gets you dancing",
    "A song with an unforgettable chorus",
    "A song that reminds you of your childhood",
    "A song that gets you pumped up",
    "A song with a nostalgic feel",
    "A song that tells a story",
    "A song with a funky bassline",
    "A song that feels like a warm hug",
    "A song with a catchy whistle",
    "A song with a dreamy atmosphere",
    "A song that gives you goosebumps",
    "A song that transports you to another world",
    "A song that takes you on a journey",
    "A song with a memorable opening",
    "A song with a soulful vibe",
    "A song that makes you feel empowered"
  ];
  
  var question = document.querySelector(".question");
  
  function handleClick() {
    let index = Math.floor(Math.random() * cards.length);
    question.innerHTML = `<p class="close">X</p>
  <p>${cards[index]}</p>`;
    question.classList.add("show");
  
    // Add event listener for the close button after it has been created
    let close = document.querySelector(".close");
    if (close) {
      close.addEventListener("click", function () {
        question.classList.remove("show");
        question.innerHTML = "";
      });
    }
  }
  
  // Get a reference to the button element
  let button = document.getElementById("my-button");
  
  // Attach the handleClick function to the button's click event
  button.addEventListener("click", handleClick);
  