// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const parolaUtente = prompt('Inserisci una parola');

let risultato;

if (palindroma(parolaUtente)) {
    risultato = 'La parola inserita è palindroma';
} else {
    risultato = 'La parola inserita non è palindroma';
};

console.log(risultato);

function palindroma(parola) {
    let x = parola.length
    for (let i = 0; i < x; i++) {
        x -= 1;
        if (parola[i] != parola[x]) {
            return false;
        };
    };
    return true;
};