

let alleInput = document.querySelectorAll('input');
let labelNavne = ["1-s", "2-s", "3-s", "4-s", "5-s", "6-s", "One-pair", "Two-pair", "Three same", "Four same", "Full house", "Small straight", "Large straight", "Chance", "Yatzy"]
console.log(alleInput.length)
//sæt id på input felter og sæt label på:
for (let element in alleInput) {

   alleInput[element].id = labelNavne[element];
   alleInput[element].value = "Hej"

    alleInput[element].outerHTML = '<label id="' + labelNavne[element] + '-label" for='+alleInput[element].id +'>' 
    + labelNavne[element] + '</label>' + alleInput[element].outerHTML;
}



