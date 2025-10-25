const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
const cityIndex = city.indexOf(`Y`);
console.log(cityIndex); // Output: 4

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = city.slice(cityIndex , city.length);
const citySubstringV2 = city.substring(cityIndex , city.length); //altro metodo possibile
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = city.slice(0, cityIndex) + `Delhi`;
console.log(cityReplaced); // Output:  "New Delhi"
// other version

const cityReplacedV2 = city.replace("York", "Delhi");
console.log(cityReplacedV2); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"

//6. Bonus del bonus (pat)
// suddividere shoppingList in un array di singole stringhe
// stampare il risultato in console dei singoli elementi

let startWord = 0;
let endWord = 0;
let arrayList = [``];
let j = 0;
let lastChar = shoppingList.charAt(0);
let listLenght = shoppingList.length;
//console.log(listLenght); // output: 25

for (let i = 0; i < listLenght; i++) {
    //console.log(i);
    if (i != 0) {
        lastChar = shoppingList.charAt(i);
        
        if ((shoppingList.charAt(i) == `,`) || (shoppingList.charAt(i) == ` `) && (lastChar != `,` || lastChar != ` `)) {
            endWord = i;
            arrayList[j] = shoppingList.slice(startWord, endWord);
            console.log(`Questo è l'elemento numero ${j + 1} della lista: ${arrayList[j]}`);
            j++;
            i++;
            //startWord = i+1;
            if ((lastChar == `,` || lastChar == ` `) && (shoppingList.charAt(i) != `,` || shoppingList.charAt(i) != ` `)) {
                startWord = i+1;
            }
        }
    } else {
        
    }
    
}
arrayList[j] = shoppingList.slice(startWord, listLenght);
console.log(`Questo è l'ultimo elemento, il numero ${j + 1} della lista : ${arrayList[j]}`);