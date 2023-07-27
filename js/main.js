// Chiedo a l'utente di scegliere tra pari o dispari
// creo un valore "scelta utente"
const sceltaUtente = prompt("Inserisci PARI o DISPARI");
console.log("Scelta dell'utente: " + sceltaUtente);

// creo un valore "pari"
const sceltaPari = "pari";

// creo un valore "dispari"
const sceltaDispari = "dispari";

// TODO COSA FARE SE MI SCRIVE ALTRE PAROLE

// Chiediamo a l'utente di inserire un numero da 1 a 5
// creo un valore = "numero utente"
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Numero dell'utente: " + numeroUtente);

// TODO COSA FARE SE MI SCRIVE UN VALORE CHE NON SIA TRA 1 E 5

const numeroCasuale = numberRandomGenerator();
console.log("Numero casuale Generato: " + numeroCasuale);
