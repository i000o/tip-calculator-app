document.addEventListener("DOMContentLoaded", () => { 

    // DEFINE VARIABLES 

    const billInput = document.querySelector(".bill"); // bill total input
    const tipInputs = document.querySelectorAll(".tip"); // select tip % radio input 
    const numberOfPeopleInput = document.querySelector(".people"); // no. of people input 
    const tipAmountPerPerson = document.querySelector(".tip-amount"); // show tip amount span 
    const totalPerPerson = document.querySelector(".total-per-person"); // show total bill per person span
    const form = document.querySelector(".form"); // form div 
    const error = document.querySelector(".people-error"); // error msg 
    const customTip = document.querySelector(".custom"); // custom tip input 
    const resetButton = document.querySelector(".reset"); // reset button 

    // FUNCTION DECLARATIONS 

    // 1 CALCULATE TIP 
    function calculateTip() { 

    // CONVERT STRING INPUTS INTO USABLE VALUES 
    let billValue = parseFloat(billInput.value) || 0; // this retrieves the value entered in the Bill field and stores it in the variable 'billValue'
    let numberOfPeople = parseInt(numberOfPeopleInput.value, 10); // this retrieves the value entered in the number of people field and stores it in 'numberOfPeople'. We ask it to parse a number with radix Base 10 (decimals for money) as long as the outcome is truthy, otherwise use 1 person. 
    let customValue = parseFloat(customTip.value) || 0; 
    let tipPercetage; // how can I declare like this? this is a declaration but not an assignment? 
    const tipSelection = document.querySelector('input[name="tip"]:checked'); 
    if (tipSelection) { 
        tipPercentage = parseFloat(tipSelection.value);  // until here, it's assigned? 
    } else tipPercentage = 0; 


    // CALCULATE TIP WITH THOSE VALUES 
    let tipValue = billValue * (tipPercentage / 100);
    let tipAmountValue = tipValue / numberOfPeople; // changed variable name to avoid shadowing 
    let totalValue = (tipValue + billValue) / numberOfPeople;  // changed variable name to avoid shadowing  

    // UPDATE THE TOTALS AND SHOW 
    tipAmountPerPerson.textContent = '$' + tipAmountValue.toFixed(2); // this was tipAmountValue before - can't call .textContent on that 
    totalPerPerson.textContent = '$' + totalValue.toFixed(2); // this was totalValue before - can't call .textContent on that
    tipAmountPerPerson.style.display = 'block'; // spans didn't show with = ''; 
    totalPerPerson.style.display = 'block'; // spans didn't show with = ''; 
    }

    // 2 ERROR 

        function errorMessage() { // where should this be called? 
        if (numberOfPeople === 0) { 
            error.style.display = "block"; 
        }
    }

    // 3 RESET 
    function reset() { 
        billInput.value = ""; 
        tipInputs.value = ""; // check if this is ok 
        numberOfPeopleInput.value = ""; 
        tipInputs.value = false; // same here 
    }


    // EVENT LISTENERS 
    resetButton.addEventListener("click", reset);  
    billInput.addEventListener("input", calculateTip); 
    numberOfPeopleInput.addEventListener("input", calculateTip);
    // error listener here? 
    numberOfPeopleInput.addEventListener("input", errorMessage); // scope invisible ?
    tipInputs.forEach(tip => { // don't change tipInputs here 
        tip.addEventListener("change", calculateTip); 
    });
});