document.addEventListener("DOMContentLoaded", () => { 
    
 // DEFINE VARIABLES 

const billInput = document.querySelector(."bill"); 
const tipInputs = document.querySelector(".tip"); 
const numberOfPeopleInput = document.querySelector(".people"); 
const tipAmountPerPerson = document.querySelector(".tip-amount"); 
const totalPerPerson = document.querySelector(".total-per-person"); 
const error = document.querySelector(".people-error"); 
const customInput = document.querySelector(".custom"); 
const resetButton = document.querySelector(".reset"); 
const form = document.querySelector(".form"); 

// FUNCTIONS 

    // 1 CALCULATE TIP 

    function calculateTip() { 
    
    // COLLECT VALUES 

    let billValue = parseFloat(billInput.value) || 0; 
    let numberOfPeopleValue = parseInt(numberOfPeopleInput.value, 10); 
    let customValue = parseFloat(customInput.value) || 0; 
    let tipPercentage = ""; // does this need to be here. This does need to be let because it's reassignable from radio/custom // see line 30 
    const tipRadio = document.querySelector('input[name="tip":checked');
    // TAKE THE VALUE FROM EITHER THE CHECKED RADIO OR THE CUSTOM ENTRY AND USE IT AS TIP % 

        if (tipRadio) { // watch the variable naming here - is this name useful? what is this expression really doing? 
            tipPercentage = parseFloat(tipSelection.value); 
        } else { 
            tipPercentage = parseFloat(customInput.value) || 0; 
        } 

    // IF/ELSE STATEMENT FOR NUMBER OF PEOPLE BEING 0 SHOW ERROR SPAN 

    // CALC 

    // UPDATE THE TOTALS AND SHOW THE SPANS 

    }

    // 2 RESET 

    // function reset { 

    // }

// EVENT LISTENERS 

form.addEventListener("reset", reset); // "reset" event not "click"? 
billInput.addEventListener("input", calculateTip); 
numberOfPeopleInput.addEventListener("input", calculateTip); 
customInput.addEventListener("input", () => { 
    tipInputs.forEach(tipInput => tipInput.checked = false); 
    calculateTip(); 
}); 
tipInputs.forEach(tipInput => () { 
    tipInput.addEventListener("change", () => { 
        customInput.value = ''; 
        calculateTip(); 
        });
});