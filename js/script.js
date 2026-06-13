document.addEventListener("DOMContentLoaded", () => { 
    
 // DEFINE VARIABLES 

const billInput = document.querySelector(".bill"); 
const tipInputs = document.querySelectorAll(".tip"); 
const numberOfPeopleInput = document.querySelector(".people"); 
const tipAmountPerPerson = document.querySelector(".tip-amount"); 
const totalPerPerson = document.querySelector(".total-per-person"); 
const error = document.querySelector(".people-error"); 
const customInput = document.getElementById("custom"); 
const resetButton = document.getElementById("reset"); // changed from class selector 
const form = document.querySelector(".form"); 

// FUNCTIONS 

    // 1 CALCULATE TIP 

    function calculateTip() { 
    // COLLECT VALUES 

    let billValue = parseFloat(billInput.value) || 0; 
    let numberOfPeopleValue = parseInt(numberOfPeopleInput.value, 10); 
        if (numberOfPeopleValue === 0) { 
            error.textContent = "Can't be zero"; // I was missing this before 
            error.style.display = 'block';  
            tipAmountPerPerson.textContent = '$0.00'; 
            totalPerPerson.textContent = '$0.00'; 
            tipAmountPerPerson.style.display = 'block'; 
            totalPerPerson.style.display = 'block'; 
            return; 
        } else { 
            error.style.display = 'none'; 
        }
        if (!numberOfPeopleValue) { 
            numberOfPeopleValue = 1; 
        }
    let customValue = parseFloat(customInput.value); 
    let tipPercentage;
    const tipSelection = document.querySelector('input[name="tip"]:checked');
        if (customValue) { 
            tipPercentage = customValue;
        } else if (tipSelection) { 
            tipPercentage = parseFloat(tipSelection.value); 
        } else { 
            tipPercentage = 0; 
        }

    // CALC 

    let tipValue = billValue * (tipPercentage / 100); 
    let tipAmountValue = tipValue / numberOfPeopleValue; 
    let totalValue = (tipValue + billValue) / numberOfPeopleValue; 

    // UPDATE THE TOTALS AND SHOW THE SPANS 

    tipAmountPerPerson.textContent = '$' + tipAmountValue.toFixed(2); 
    totalPerPerson.textContent = '$' + totalValue.toFixed(2); 
    tipAmountPerPerson.style.display = 'block'; 
    totalPerPerson.style.display = 'block'; 
    }

    // 2 RESET 

    function reset() { 
        billInput.value = ""; 
        customInput.value = ""; 
        numberOfPeopleInput.value = ""; 
        tipAmountPerPerson.style.display = 'none'; 
        totalPerPerson.style.display = 'none'; 
        error.style.display = 'none'; 
        tipInputs.forEach(tipInput => { 
            tipInput.checked = false; 
        })
    }

// EVENT LISTENERS 

    resetButton.addEventListener("click", reset); 
    billInput.addEventListener("input", calculateTip); 
    numberOfPeopleInput.addEventListener("input", calculateTip); 
    customInput.addEventListener("input", () => { 
        tipInputs.forEach(tipInput => tipInput.checked = false); 
        calculateTip(); 
    }); 
    tipInputs.forEach(tipInput => { 
        tipInput.addEventListener("change", () => { 
            customInput.value = ''; 
            calculateTip(); 
            });
    }); 
}); 