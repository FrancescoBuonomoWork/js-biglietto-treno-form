console.log('calcolatore');
// - stabilire in una variabile il prezzo al km e gli sconti tramite delle const 
const PREZZO_PER_KM = 0.21;
const SCONTO_OVER_65 = 40;
const SCONTO_MINORENNI = 20;
// prendo il pulsante dal DOM 
const btnDOMElement = document.getElementById('btn-calc')
console.log(btnDOMElement)
// - chiedere all' utente i chilometri che vuole percorrere tramite un input quindi prendendolo dal DOM
const inputDOMElement = document.getElementById('expected-km');
console.log('inputDOMElement');
// prendo il  prezzo dal DOM 
const prezzoDOMElement = document.querySelector('.price');
console.log(prezzoDOMElement);
// prendo lo sconto dal DOM 
const selDOMElement = document.getElementById('discount');
// al bottone aggiungere un evento click con il quale immagazzineremo i valori esposti dall'utente e calcoleremo il prezzo da pagare 
btnDOMElement.addEventListener('click', function () {
    
})