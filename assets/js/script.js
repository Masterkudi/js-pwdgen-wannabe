const nome = prompt("Inserisci il tuo nome:");

const cognome = prompt("Inserisci il tuo cognome:");

const colorePreferito = prompt("Inserisci il tuo colore preferito:");

const eta = prompt("Inserisci la tua età:");

const risultato = nome + cognome + colorePreferito + (21 + parseInt(eta));

const outputDiv = document.getElementById("output");

outputDiv.innerHTML = risultato;
