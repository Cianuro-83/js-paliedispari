console.log("Ciao Cianuro.. oggi PALI & DISPARI");

// CREO INPUT PER RICHIEDERE PAROLA
let parola = prompt("Inserisci una parola");
console.log(parola);

// PRENDO LA PAROLA E LA METTO IN UN ARRAY DIVIDENDOLA IN LETTERE
let putInArray = parola.split("");
console.log(putInArray);

// CREO UN NUOVO ARRAY CON I VALORI INVERTITI
let parolaReverse = putInArray.reverse();
console.log(parolaReverse);

// CONFRONTO I DUE ARRAY
for (let i = 0; i < parolaReverse.length; i++) {
  if (parolaReverse[i] != putInArray[i]) {
    console.log("La parola inserita è palindroma");
    console.log(parolaReverse[i], putInArray[i]);
  } else {
    console.log("La parola inserita NON è palindroma");
  }
}
