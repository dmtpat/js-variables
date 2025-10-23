// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
// Stampa il valore di nome nella console.

let name = 'Patricia';
console.log(name);

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
// un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.

let number = 1;
let text = `ciao`;
let bool = true;

console.log(`questo è un numero ${number}`);
console.log(`questa è una stringa ${text}`);
console.log(`questo è un valore booleano ${bool}`);


// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const fullName = firstName + ` ` + lastName;
console.log(fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = alphabet.length;
console.log(numberOfLettersInAlphabet); // Output: 26