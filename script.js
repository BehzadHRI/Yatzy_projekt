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
  