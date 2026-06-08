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

    // 1) CALCULATE TIP 
    function calculateTip() { 

    // CONVERT STRING INPUTS INTO USABLE VALUES 
    let billValue = parseFloat(billInput.value) || 0; // this retrieves the value entered in the Bill field and stores it in the variable 'billValue'
    let tipPercentage = parseFloat(tipInputs.value) || 0; // this retrieves the value chosen from the tip amount buttons and stores it in 'tipPercentage'
    let numberOfPeople = parseInt(numberOfPeopleInput.value, 10) || 1; // this retrieves the value entered in the number of people field and stores it in 'numberOfPeople'. We ask it to parse a number with radix Base 10 (decimals for money) as long as the outcome is truthy, otherwise use 1 person. 
    function errorMessage() { // where should this be called? 
        if (numberOfPeople === 0) { 
            error.style.display = "block"; 
        }
    }
    let customValue = parseFloat(customTip.value) || 0; 


    // CALCULATE TIP WITH THOSE VALUES 
    let tipValue = billValue * (tipPercentage / 100);
    let tipAmountValue = tipValue / numberOfPeople; // changed variable name to avoid shadowing 
    let totalValue = (tipValue + billValue) / numberOfPeople;  // changed variable name to avoid shadowing  

    console.log(tipAmountValue, totalValue);

    // UPDATE THE TOTALS AND SHOW 
    tipAmountValue.textContent = '$' + tipAmountValue.toFixed(2); 
    totalValue.textContent = '$' + totalValue.toFixed(2);
    }

    // 2) RESET 
    function reset() { 
        billInput.value = ""; 
        tipInputs.value = ""; 
        numberOfPeopleInput.value = ""; 
        tipInputs.value = false; 
    }


    // EVENT LISTENERS 
    resetButton.addEventListener("click", reset);  
    billInput.addEventListener("input", calculateTip); 
    numberOfPeopleInput.addEventListener("input", calculateTip);
    // error listener here? 
    numberOfPeopleInput.addEventListener("input", errorMessage); // scope invisible ?
    tipInputs.forEach(tip => { 
        tip.addEventListener("change", calculateTip); 
    });
});

// FIX TIPINPUTS > Retrives a NodeList which you can't use value on 