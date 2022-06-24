let getal = Math.round(Math.random() * 100);
let counter = 1;
const feedback = document.getElementById("feedback")
function checkWaarde() {
    let inputGetal = document.getElementById("input").value;
    if (inputGetal > getal) {
        feedback.innerText = "Lager!";
        counter++;
    } else if(inputGetal < getal) {
        feedback.innerText = "Hoger!";
        counter++;
    } else {
        feedback.innerText = "Correct!"
        document.getElementById("aantalMoves").innerText = "Je hebt het getal geraden in " + counter + " zet(ten)";
    }
}