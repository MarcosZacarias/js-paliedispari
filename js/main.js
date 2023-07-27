// Chiedo a l'utente di scegliere tra pari o dispari
// creo un valore "scelta utente"
let sceltaUtente = prompt("Inserisci PARI o DISPARI");
sceltaUtente = sceltaUtente.toLowerCase();
console.log("Scelta dell'utente: " + sceltaUtente);

// creo un valore "pari"
let sceltaPari = "pari";
console.log(sceltaPari);

// creo un valore "dispari"
let sceltaDispari = "dispari";
console.log(sceltaDispari);

let sceltaSbagliata = "Dati non validi, inserisci la parola PARI o DISPARI";

// TODO COSA FARE SE MI SCRIVE ALTRE PAROLE
while (sceltaUtente != sceltaPari && sceltaUtente != sceltaDispari) {
  alert(sceltaSbagliata);
  sceltaUtente = prompt("Inserisci PARI o DISPARI");
}

console.log("Scelta dell'utente: " + sceltaUtente);

// Chiediamo a l'utente di inserire un numero da 1 a 5
// creo un valore = "numero utente"
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Numero dell'utente: " + numeroUtente);

let numeroSbagliato = "Dati non validi, inserisci un numero da 1 a 5";

// TODO COSA FARE SE MI SCRIVE UN VALORE CHE NON SIA TRA 1 E 5
while (numeroUtente > 5 || numeroUtente < 1) {
  alert(numeroSbagliato);
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}
console.log("Numero dell'utente: " + numeroUtente);

const numeroCasuale = numberRandomGenerator();
console.log("Numero casuale Generato: " + numeroCasuale);

// Sommo i due numeri
const somma = numeroUtente + numeroCasuale;
console.log("Somma dei numeri: " + somma);

// Stampo il vincitore
const winner = risultatoVincitore();
console.log(winner);
