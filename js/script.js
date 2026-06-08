document.addEventListener("DOMContentLoaded", () => { 

    // DEFINE VARIABLES 

    const billInput = document.querySelector(".bill"); // bill total input
    const tipInput = document.querySelectorAll(".tip"); // select tip % radio input 
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
    let tipPercentage = parseFloat(tipInput.value) || 0; // this retrieves the value chosen from the tip amount buttons and stores it in 'tipPercentage'
    let numberOfPeople = parseInt(numberOfPeopleInput.value, 10) || 1; // this retrieves the value entered in the number of people field and stores it in 'numberOfPeople'. We ask it to parse a number with radix Base 10 (decimals for money) as long as the outcome is truthy, otherwise use 1 person. 


    function errorMessage() { // where should this be called? 
        if (numberOfPeople === 0) { 
            error.style.display = "block"; 
        }
    }

    let customValue = parseFloat(customTip.value) || 0; 


    // CALCULATE TIP WITH THOSE VALUES 
    let tipValue = billValue * (tipPercentage / 100);
    let tipAmountPerPerson = tipValue / numberOfPeople; 
    let totalPerPerson = (tipValue + billValue) / numberOfPeople; 

    // remember to use .toFixed(2) Where does this go? 

    tipAmountPerPerson.style.display = ''; // added display: none; in CSS for x2 spans 
    totalPerPerson.style.display = ''; 
    // replace the above 2 lines with the below 


    tipAmountPerPerson.textContent = '$' + tipAmountValue.toFixed(2); 
    totalPerPerson.textContent = '$' + totalPerPerson.toFixed(2);
    }

    // 2) RESET 

    function reset() { 
        billInput.value = ""; 
        tipInput.value = ""; 
        numberOfPeopleInput.value = ""; 
        tipInput.value = false; 
    }


    // EVENT LISTENERS 

    // RESET BUTTON EVENT HANDLER FOR RESET BUTTON TO EMPTY FIELDS 
    resetButton.addEventListener("click", reset);  
    billInput.addEventListener("input", calculateTip); 
    tipInput.addEventListener("input", calculateTip);
    numberOfPeopleInput.addEventListener("input", calculateTip);
    // error listener here? 
});