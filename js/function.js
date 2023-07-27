// ! Pari e Dispari

// // Generiamo un numero casuale da 1 a 5
// // creo un valore = "numero casuale"
// function numberRandomGenerator() {
//   const numeroCasuale = Math.floor(Math.random() * (5 - 1)) + 1;
//   return numeroCasuale;
// }

// // SE
// function risultatoVincitore() {
//   let winner;
//   if (
//     // "scelta utente" = "pari" e "somma" è pari (somma divisibile per 2)
//     (sceltaUtente === sceltaPari && somma % 2 == 0) || // O
//     // "scelta utente" = "dispari" e "somma" è dispari (somma non divisibile per 2)
//     (sceltaUtente === sceltaDispari && !(somma % 2 == 0))
//   ) {
//     // Stampo "il vincitore è l'utente"
//     winner = "Il vincitore è l'utente";
//   } else {
//     // ALTRIMENTI
//     // Stampo "il vincitore è il computer"
//     winner = "Il Vincitore è il computer";
//   }
//   return winner;
// }

// ! Palidroma

// Creo un valore con le lettere della "_parola utente_" ma al contrario
function parolaPalindroma() {
  let parolaAlContario = "";
  for (let i = parolaUtente.length - 1; i > -1; i--) {
    const lettera = parolaUtente[i];
    console.log("lettera: " + lettera);

    parolaAlContario += lettera;
  }

  console.log("Parola scritta dall'utente al contrario: " + parolaAlContario);

  // **SE** la "_parola utente_" **é** = "_parola utente al contrario_"
  if (parolaAlContario == parolaUtente) {
    // - Stampo: "la parola è palindroma"
    parolaAlContario = "La parola scritta è palindroma";
  } else {
    // **ALTRIMENTI**
    // - Stampo: "la parola non è palindroma"
    parolaAlContario = "La parola scritta non è palindroma";
  }
  return parolaAlContario;
}
