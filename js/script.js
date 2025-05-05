document.addEventListener("DOMContentLoaded", () => { // wait til DOM is fully loaded before you do anything
    // preventDefault? 
    // declare your variables 

    document.querySelector(".form").addEventListener("reset", function (e)) { 
        e.preventDefault();
    }

    let billInput = document.querySelector(".bill"); // bill total input
    let selectTipInput = document.querySelector(".tip"); // select tip % radio button input 
    let numberOfPeopleInput = document.querySelector(".people"); // no. of people text field input 
    let tipAmountPerPerson = document.querySelector(".tip-amount"); // show tip amount span
    let totalPerPerson = document.querySelector(".total-per-person"); // show total bill per person span

    function calculateTip() { 
        // converts entered values from stirngs into numbers 

        let bill = parseFloat(billInput.value); // this retrieves the value entered in the Bill field and stores it in the variable 'bill' 
        let tipPercentage = parseFloat(selectTipInput.value); // this retrieves the value chosen from the tip amount buttons and stores it in 'tipPercentage'
        let numberOfPeople = parseFloat(numberOfPeopleInput); // this retrieves the value entered in the number of people field and stores it in 'numberOfPeople'

        // does calculations necessary 

        let tip = bill * (tipPercentage / 100);
        let total = tip + bill; 
        let tipAmountPerPerson = tip / numberOfPeople; 
        let totalPerPerson = total / numberOfPeople; 

        tipAmountPerPerson.textContent = ${tipAmountPerPerson.toFixed(2)}; 
        totalPerPerson.textContent = ${totalPerPerson.toFixed(2)};
    }
}))