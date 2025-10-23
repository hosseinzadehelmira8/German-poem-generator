
function displayPoem(response) {
  const poemText = response.data.answer;


  const lines = poemText.split("<br>").map(line => line.trim());

  new Typewriter("#poem", {
    strings: lines,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}


function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  
  let apiKey = "o71cftf3350534f83bd42f846a7af05e";

  let context =
    "You are a German Poem expert and love to write short poems. " +
    "Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. " +
    "Make sure to follow the user instructions. Do not include a title to the poem. " +
    "Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";

  
  let prompt = `User instructions: Generate a German poem about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a German poem about ${instructionsInput.value} ...</div>`;


  axios.get(apiURL)
    .then(displayPoem)
    .catch((error) => {
      poemElement.innerHTML = "❌ Error generating poem. Please try again.";
      console.error(error);
    });
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
