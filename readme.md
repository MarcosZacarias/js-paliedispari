# Paliedispari

## TRACCIA

**Palidroma**

- Chiedere all'utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma

**Pari e Dispari**

- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.

Consigli del giorno

1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

## ISTRUZIONI

### Palidroma

Chiedo all'utente di scrivere una parola

- parola scritta = a "_parola utente_"

Creo un valore con le lettere della "_parola utente_" ma al contrario

- "_parola utente al contrario_"

**SE** la "_parola utente_" **é** = "_parola utente al contrario_"

- Stampo: "la parola è palindroma"

**ALTRIMENTI**

- Stampo: "la parola non è palindroma"

### Pari e Dispari

Chiedo a l'utente di scegliere tra pari o dispari

- creo un valore "_scelta utente_"

- creo un valore "_pari_"
- creo un valore "_dispari_"

**TODO COSA FARE SE MI SCRIVE ALTRE PAROLE**

Chiediamo a l'utente di inserire un numero da 1 a 5

- creo un valore = "_numero utente_"

**TODO COSA FARE SE MI SCRIVE UN VALORE CHE NON SIA TRA 1 E 5**

Generiamo un numero casuale da 1 a 5

- creo un valore = "_numero casuale_"

Sommo i due numeri

- "_somma_" = "_numero utente_" + "_numero casuale_"

**SE**

"_scelta utente_" = "_pari_" **e** "_somma_" è pari (somma divisibile per 2)

**O**

"_scelta utente_" = "_dispari_" **e** "_somma_" è dispari (somma non divisibile per 2)

- Stampo "il vincitore è l'utente"

**ALTRIMENTI**

- Stampo "il vincitore è il computer"
