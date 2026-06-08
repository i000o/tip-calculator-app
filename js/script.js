document.addEventListener("DOMContentLoaded", () => { // 1 wait til DOM is fully loaded before you do anything

    // 2 declare your variables 

    // Change querySelectors to IDs for tailwind

    const billInput = document.querySelector(".bill"); // bill total input
    const tipInput = document.querySelector(".tip"); // select tip % radio input 
    const numberOfPeopleInput = document.querySelector(".people"); // no. of people input 
    const tipAmountPerPerson = document.querySelector(".tip-amount"); // show tip amount span 
    const totalPerPerson = document.querySelector(".total-per-person"); // show total bill per person span
    const form = document.querySelector(".form"); // form div 
    const error = document.querySelector(".people-error"); // error msg 
    const customTip = document.querySelector(".custom"); // custom tip input 
    const resetButton = document.querySelector(".reset"); // reset button


    // RESET BUTTON EVENT HANDLER 

    function resetCalculator() { 

        resetButton.addEventListener(e, onclick) { 
            billInput.textContent = ""; 
            customTip.textContent = "";
            numberOfPeopleInput.textContent = ""; 
            tipInput.checked = false; 
        }
    }



    function calculateTip() {  // eventHandler 

    // converts entered values from strings into numbers 

    let billValue = parseFloat(billInput.value) || 0; // this retrieves the value entered in the Bill field and stores it in the variable 'billValue'
    let tipPercentage= parseFloat(tipInput.value) || 0; // this retrieves the value chosen from the tip amount buttons and stores it in 'tipPercentage'
    let numberOfPeople = parseInt(numberOfPeopleInput.value, 10) || 1; // this retrieves the value entered in the number of people field and stores it in 'numberOfPeople'. We ask it to parse a number with radix Base 10 (decimals for money) as long as the outcome is truthy, otherwise use 1 person. 

    // does calculations necessary 

    let tipValue = billValue * (tipPercentage / 100);
    let tipAmountPerPerson = tipPercentage / numberOfPeople; 
    let totalPerPerson = (tipPercentage + billValue) / numberOfPeople; 

    // update the totals to .2 decimal places accordingly

    tipAmountPerPerson.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    totalPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
    // toFixed is a method to convert the number value to a fixed decimal point with the number of places defined in the brackets e.g. `(2)`.
}

    billInput.addEventListener('input', calculateTip); // is this scoped right? This logic isn't right. You can't calculate the tip till teh % has been selected, or you wouldn't. 
    numberOfPeopleInput.addEventListener('input', calculateTip);
    customTip.addEventListener('input', e => {
        // this needs something here 
    })

    // only when we have all three values do we want the calc to run 

    // i think everything needs to be inside the function 
    tip.addEventListener('click', calculateTip);
    // tip isn't anything 

    reset.addEventListener('click', e => { 
    // reset the calc, clear all fields, don't calculate anything 
    })
})