document.addEventListener("DOMContentLoaded", () => { // 1 wait til DOM is fully loaded before you do anything

    // 2 declare your variables 

    const billInput = document.querySelector(".bill"); // bill total input
    const tipInput = document.querySelector(".tip"); // select tip % radio input 
    const numberOfPeopleInput = document.querySelector(".people"); // no. of people input 
    const tipAmountPerPerson = document.querySelector(".tip-amount"); // show tip amount span 
    const totalPerPerson = document.querySelector(".total-per-person"); // show total bill per person span
    const form = document.querySelector(".form"); // form div 
    const error = document.querySelector(".people-error"); // error msg 
    const customTip = document.querySelector(".custom"); // custom tip input 
    const reset = document.querySelector(".reset"); // reset button

    function calculateTip() { 

    // converts entered values from strings into numbers 

    let billValue = parseFloat(billInput.value) || 0; // this retrieves the value entered in the Bill field and stores it in the variable 'bill' 
    let tipPercentage= parseFloat(tipInput.value) || 0; // this retrieves the value chosen from the tip amount buttons and stores it in 'tipInput'
    let numberOfPeople = parseInt(numberOfPeopleInput.value, 10 || 1); // this retrieves the value entered in the number of people field and stores it in 'numberOfPeople'

    // does calculations necessary 

    let tipValue = billValue * (tipPercentage / 100);
    let tipAmountPerPerson = tipPercentage / numberOfPeople; 
    let totalPerPerson = (tipPercentage + billValue) / numberOfPeople; 

    tipAmountPerPerson.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    totalPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
    // toFixed is a method to convert the number value to a fixed decimal point with the number of places defined in the brackets e.g. `(2)`.
}

    billInput.addEventListener('input', calculateTip); 
    numberOfPeopleInput.addEventListener('input', calculateTip);
    customTip.addEventListener('input', e => {

    })
    tip.addEventListener('click', calculateTip);

    reset.addEventListener('click', e => { 

    })
})