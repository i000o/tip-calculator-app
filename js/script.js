document.addEventListener("DOMContentLoaded", () => { 

    // DEFINE VARIABLES 

    const billInput = document.querySelector(".bill"); // bill total input
    const tipInputs = document.querySelectorAll(".tip"); // select tip % radio inputs 
    const numberOfPeopleInput = document.querySelector(".people"); // no. of people input 
    const tipAmountPerPerson = document.querySelector(".tip-amount"); // tip amount span 
    const totalPerPerson = document.querySelector(".total-per-person"); // total bill per person span
    const error = document.querySelector(".people-error"); // error span 
    const customTip = document.querySelector(".custom"); // custom tip input 
    const resetButton = document.querySelector(".reset"); // reset button 

    // FUNCTION DECLARATIONS 

    // 1 CALCULATE TIP 
    function calculateTip() { 

        // CONVERT STRING INPUTS INTO USABLE VALUES 
        let billValue = parseFloat(billInput.value) || 0; // this retrieves the value entered in the Bill field and stores it in the variable 'billValue'
        let numberOfPeople = parseInt(numberOfPeopleInput.value, 10); // this retrieves the value entered in the number of people field and stores it in the variable 'numberOfPeople'. We ask it to parse a number with radix Base 10. Radix number good to include with parseInt(). 
            if (numberOfPeople === 0 || isNaN(numberOfPeople)) { // if the number of people entered is 0, or not a number, display the error span and then stop, otherwise hide the error span
                error.style.display = 'block';
                numberOfPeopleInput.classList.add('error'); // this makes this activate before the user has even attempted to enter anything // what is this line doing that the above isn't? 
                return; // stop running 
            } else { 
                error.style.display = 'none'; 
            }
        let customValue = parseFloat(customTip.value) || 0; // is || 0 applicable here? How does this interact with checked radio buttons? THIS IS A RADIO TOO 
        let tipPercetage; // how can I declare like this? this is a declaration but not an assignment? 
        const tipSelection = document.querySelector('input[name="tip"]:checked'); // doesn't evaluate for custom entry I don't think 
            if (tipSelection) { 
                tipPercentage = parseFloat(tipSelection.value);  // until here, it's assigned? 
            } else { 
                tipPercentage = 0; 
            }

        // CALCULATE TIP WITH THOSE VALUES 
        let tipValue = billValue * (tipPercentage / 100);
        let tipAmountValue = tipValue / numberOfPeople; // changed variable name to avoid shadowing 
        let totalValue = (tipValue + billValue) / numberOfPeople;  // changed variable name to avoid shadowing  
        // add consideration for customValue which you parse in line 29  

        // UPDATE THE TOTALS AND SHOW 
        tipAmountPerPerson.textContent = '$' + tipAmountValue.toFixed(2); // this was tipAmountValue before - can't call .textContent on that because it's a number data type 
        totalPerPerson.textContent = '$' + totalValue.toFixed(2); // this was totalValue before - can't call .textContent on that because it's a number data type 
        tipAmountPerPerson.style.display = 'block'; // spans didn't show with = ''; 
        totalPerPerson.style.display = 'block'; // spans didn't show with = ''; 
        }

        // 3 RESET doesn't work 
        function reset() { 
            billInput.value = ""; 
            customTip.value = ""; // included here 
            numberOfPeopleInput.value = ""; 
            tipAmountPerPerson.style.display = 'none'; 
            totalPerPerson.style.display = 'none';
            tipInputs.forEach(tip => { // this is going over them all instead of the one that's checked, is there a better way? 
                console.log("unchecking", tip); 
                tip.checked = false; 
            })
            numberOfPeopleInput.classList.remove('error'); 
        }


    // EVENT LISTENERS 
    resetButton.addEventListener("click", reset);  
    billInput.addEventListener("input", calculateTip); // this triggers early error outline on numberofpeopel 
    numberOfPeopleInput.addEventListener("input", calculateTip);
    // error listener here? 
    tipInputs.forEach(tip => { // don't change tipInputs here // consider that custom doesn't have a "tip" class in the HTML 
        tip.addEventListener("change", calculateTip); 
    });
});


// can the custom radio also have an type="number"? 