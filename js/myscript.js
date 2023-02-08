console.log("Ciao Cianuro.. oggi PALI & DISPARI");

// CREO INPUT PER RICHIEDERE PAROLA
let parola = prompt("Inserisci una parola");
console.log(parola);

let prova = palindroma(parola);
console.log(prova);

let risulto = palindroma(parola);
if (risulto === true) {
  document.write("la parola " + parola + " è palindroma");
} else {
  document.write("la parola " + parola + " NON è palindroma");
}

// INIZIALIZZO LA FUNZIONE
function palindroma(argomento) {
  // PRENDO LA PAROLA E LA METTO IN UN ARRAY DIVIDENDOLA IN LETTERE
  let putInArray = argomento.split("");
  //   console.log(putInArray);

  // CREO UN NUOVO ARRAY CON I VALORI INVERTITI
  let parolaReverse = putInArray.reverse();
  //   console.log(parolaReverse);

  let parolaInvertita = parolaReverse.join("");
  //   console.log(parolaInvertita);

  // RENDO CASE SENSITIVE LE PAROLE PER IL CONFRONTO
  let parola1 = argomento.toUpperCase();
  let parola2 = parolaInvertita.toUpperCase();

  // CONFRONTO LE PAROLE
  if (parola1 === parola2) {
    return true;
  } else {
    return false;
  }
}
