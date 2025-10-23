function generatePoem(event) {
  event.preventDefault();

  let inputValue = document.querySelector(".instructions").value;

  
  let poemText = `✨A poem about "${inputValue}" : \n\n` +
                 "Die Sonne sinkt, der Himmel glüht,\n" +
                 "Die Nacht erwacht, der Wind sie flieht.\n" +
                 "Die Blumen träumen still im Licht,\n" +
                 "Ein Herz schlägt leise, spricht Gesicht.";

  new Typewriter("#poem", {
    strings: poemText,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
