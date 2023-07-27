// Generiamo un numero casuale da 1 a 5
// creo un valore = "numero casuale"
function numberRandomGenerator() {
  const numeroCasuale = Math.floor(Math.random() * (5 - 1)) + 1;
  return numeroCasuale;
}

// SE
function risultatoVincitore() {
  let winner;
  if (
    // "scelta utente" = "pari" e "somma" è pari (somma divisibile per 2)
    (sceltaUtente === sceltaPari && somma % 2 == 0) || // O
    // "scelta utente" = "dispari" e "somma" è dispari (somma non divisibile per 2)
    (sceltaUtente === sceltaDispari && !(somma % 2 == 0))
  ) {
    // Stampo "il vincitore è l'utente"
    winner = "Il vincitore è l'utente";
  } else {
    // ALTRIMENTI
    // Stampo "il vincitore è il computer"
    winner = "Il Vincitore è il computer";
  }
  return winner;
}
