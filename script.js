

let alleInput = document.querySelectorAll('input');
let labelNavne = ["1-s", "2-s", "3-s", "4-s", "5-s", "6-s", "One-pair", "Two-pair", "Three same", "Four same", "Full house", "Small straight", "Large straight", "Chance", "Yatzy"]
console.log(alleInput.length)
//sæt id på input felter og sæt label på:
for (let element in alleInput) {
   alleInput[element].id = labelNavne[element];

    alleInput[element].outerHTML = '<div class="label"><label id="' + labelNavne[element] + '-label" for='+alleInput[element].id +'>' 
    + labelNavne[element] + '</label> </div>' + alleInput[element].outerHTML;
}



// Venter på HTML har loaded
document.addEventListener('DOMContentLoaded', () => {

    // Vælger alle terninger 
    const diceImages = document.querySelectorAll('.dice img');
  
    // Array der holder terning værdi
    let diceValues = [];
    
    // Array der holder information omkring om en terning er "holdt"
    const diceSaved = [false, false, false, false, false];
    
    // Roll knap action method
    document.querySelector('.roll button').addEventListener('click', () => {
      
      // Roll ikke gemte terninger 
      diceImages.forEach((image, index) => {
        if (!diceSaved[index]) {
          const value = Math.floor(Math.random() * 6) + 1;
          diceValues[index] = value;
          image.src = `assets/dice${value}.png`;
        }
      });
    });
  
    // Terning klik action method
    diceImages.forEach((image, index) => {
      image.addEventListener('click', () => {
        if (!diceSaved[index]) {
          diceSaved[index] = true;
          image.style.opacity = 0.2;
        } else {
          diceSaved[index] = false;
          image.style.opacity = 1;
        }
      });
    });
    
  });
  