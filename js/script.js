document.addEventListener("DOMContentLoaded", () => { 

    // DEFINE VARIABLES 

    const billInput = document.querySelector(".bill"); // bill total input
    const tipInput = document.querySelector(".tip"); // select tip % radio input 
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

    // maybe all input fields need to go here? 

    // CONVERT STRING INPUTS INTO USABLE VALUES 
    let billValue = parseFloat(billInput.value) || 0; // this retrieves the value entered in the Bill field and stores it in the variable 'billValue'
    let tipPercentage = parseFloat(tipInput.value) || 0; // this retrieves the value chosen from the tip amount buttons and stores it in 'tipPercentage'
    let numberOfPeople = parseInt(numberOfPeopleInput.value, 10) || 1; // this retrieves the value entered in the number of people field and stores it in 'numberOfPeople'. We ask it to parse a number with radix Base 10 (decimals for money) as long as the outcome is truthy, otherwise use 1 person. 
    // let customTip = 

    // we want a condition where all 3 fields need to be entered before the calculation is done 

    // CALCULATE TIP WITH THOSE VALUES 
    let tipValue = billValue * (tipPercentage / 100);
    let tipAmountPerPerson = tipValue / numberOfPeople; 
    let totalPerPerson = (tipValue + billValue) / numberOfPeople; 

    // update DOM to show spans for tipAmountPerPerson and totalPerPerson  
    // remember to use .toFixed(2) 

    }

    // 2) RESET 

    function reset() { 
        billInput.value = ""; // check why it's value and not .textContent
        tipInput.value = ""; 
        numberOfPeopleInput.value = ""; 
        tipInput.checked = false; 
    }

    function errorMessage() { // where should this be called? 
        if (numberOfPeople === 0) { 
            error.display = "block"; // something like that 
        }
    }

    // EVENT LISTENERS 

    // RESET BUTTON EVENT HANDLER FOR RESET BUTTON TO EMPTY FIELDS 
    resetButton.addEventListener("click", reset);  
    form.addEventListener("input", calculateTip); 
    // error listener here? 
})