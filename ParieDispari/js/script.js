// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione) Dichiariamo chi ha vinto.

let pariDispariUtente = prompt('Inserisci pari o dispari');
console.log("Hai scelto: " + pariDispariUtente);

let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

console.log(numeroUtente);
console.log("Il numero digitato dall'utente è: " + numeroUtente);

let numeroPc = numeroRandom(1, 5);
console.log(numeroPc);
console.log("Il numero del pc utente è: " + numeroPc);

const somma = numeroUtente + numeroPc;

const pariDispari = checkPari(somma);

if (pariDispariUtente == 'pari' && pariDispari == true) {
    console.log('La somma dei due numeri è pari, il vincitore è l\'Utente!');
} else if (pariDispariUtente == 'dispari' && pariDispari == false) {
    console.log('La somma dei due numeri è dispari, il vincitore è l\'Utente!');
} else {
    console.log('La somma dei due numeri è ' + pariDispari + ', il vincitore è il PC');
}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkPari(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}