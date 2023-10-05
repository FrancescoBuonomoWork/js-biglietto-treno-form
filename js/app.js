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
// prendo il  prezzo dal DOM 
const prezzoDOMElement = document.querySelector('.price');
// console.log(prezzoDOMElement);
// prendo lo sconto dal DOM 
const selDOMElement = document.getElementById('discount');
// al bottone aggiungere un evento click con il quale immagazzineremo i valori esposti dall'utente e calcoleremo il prezzo da pagare 
btnDOMElement.addEventListener('click', function () {
    // prendiamo dal click del bottone i km selezionati
    const km = parseFloat(inputDOMElement.value)
    console.log(km)
    // calcoliamo il prezzo totale moltiplicando i km dichiarati * il prezzo al km 
    const totalPrice = km * PREZZO_PER_KM
    console.log(totalPrice)
    // calcoliamo lo sconto
    let discount = selDOMElement.value
    console.log(discount)
    // let discountRate = ((discount.value = 0) = SCONTO_MINORENNI )

    let discountRate = 0;
    if (discount.value == 0) {
        discountRate = totalPrice * SCONTO_MINORENNI / 100
        
        console.log(discountRate)
    }
    else if (discount.value == 2) {
        discountRate = SCONTO_OVER_65
        console.log(discountRate)
    }

    console.log(discountRate);
    // if (age < 18) {
    //     discount = totalPrice * SCONTO_MINORENNI / 100
    //     console.log(discount)
    //     totalPrice = totalPrice - discount

    // } else if (age > 65) {

    //     discount = totalPrice * SCONTO_OVER_65 / 100
    //     console.log(discount)
    //     totalPrice = totalPrice - discount
    // }
})