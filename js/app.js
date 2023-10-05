// console.log('calcolatore');
// - stabilire in una variabile il prezzo al km e gli sconti tramite delle const 
const PREZZO_PER_KM = 0.21;
const SCONTO_OVER_65 = 40;
const SCONTO_MINORENNI = 20;

// prendo il pulsante dal DOM 
const btnDOMElement = document.getElementById('btn-calc')
// console.log(btnDOMElement)
// - chiedere all' utente i chilometri che vuole percorrere tramite un input quindi prendendolo dal DOM
const inputDOMElement = document.getElementById('expected-km');
// console.log('inputDOMElement');
// console.log(prezzoDOMElement);
// prendo lo sconto dal DOM 
const selDOMElement = document.getElementById('discount');
// al bottone aggiungere un evento click con il quale immagazzineremo i valori esposti dall'utente e calcoleremo il prezzo da pagare 
btnDOMElement.addEventListener('click', function () {
    // prendiamo dal click del bottone i km selezionati
    const km = parseFloat(inputDOMElement.value)
    console.log('km da percorrere',km)
    // calcoliamo il prezzo totale moltiplicando i km dichiarati * il prezzo al km 
    let totalPrice = km * PREZZO_PER_KM
    console.log('prezzo totale',totalPrice)
    // calcoliamo lo sconto
    let discount = selDOMElement.value
    // console.log("discount", discount)
    // let discountRate = ((discount.value = 0) = SCONTO_MINORENNI )
    
    let discountRate = 0;
    
    // console.log("condizione sconto minorenne", discount === 'minorenne');
    
    if (discount === 'minorenne') {
        discountRate = totalPrice * SCONTO_MINORENNI / 100
        totalPrice = totalPrice - discountRate
        console.log("il prezzo scontato per minorenni è ", totalPrice)
    }
    else if (discount === 'over65') {
        discountRate = totalPrice * SCONTO_OVER_65 / 100
        console.log("discountRate", discountRate)
        totalPrice = totalPrice - discountRate
        console.log('il prezzo scontato per anziani è ',totalPrice)
    }
    console.log('il total price a riga 46',totalPrice)
    
    // prendo il  prezzo dal DOM 
    const prezzoDOMElement = document.querySelector('.price');
    prezzoDOMElement.innerHTML = totalPrice.toFixed(2) + ' €';
    
    
})