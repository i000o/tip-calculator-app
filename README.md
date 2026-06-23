# Tip Calculator

[Live Site URL](https://i000o.github.io/tip-calculator-app/)  
![Outcome](/design/desktop-screenshot.png)

---

## Table of contents

- [Purpose & Scope](#purpose-and-scope)
- [Decisions](#decisions)
- [Debugging](#debugging)
- [Future](#future)

---

## Purpose & Scope

This is a tip calculator based on the design brief provided by [Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Its features include:

- Takes bill input, number of people input and a tip input and calculates a tip per person and total per person to display reactively.
- Takes custom input type field over a given radio button tip selection. Calculation only uses one of the two values, never both.
- Presents an error state when user enters 0 in number of people field.
- Reset button clears all fields for new entry.

This app always splits the bill evenly and only displays a single currency.

`#scss` `#vanillajs`

---

## Decisions

**No fallback value in calc**  
Calculation does not default to `numberOfPeopleValue === 1` when user attempts to enter `0` to apply error state the brief asks for. Alternatively, this fallback would've made the calcuilation cleaner, but required additional UI to signal to the user that no splitting has been performed.

**Opted out of using historic reset button, used `button` type and `click` event instead**  
Used `type="button"` instead of `type="reset"` on reset button element. MDN advises against using a reset input due to inconsistent behaviour. Switched to `type="button"` with a `click` listener, which reliably cleared all inputs and states while `reset` left some inconsistencies.

---

## Debugging

**Radio checked state persisting after reset**  
The previously selected radio button remained checked after reset. Used console to check if my listener was clearing checked radios on reset and found checked states weren't being cleared. My variable was targetting the input `labels` not `input` elements directly and so setting `.checked = false` did nothing. I rewrote the selector to `querySelectorAll('input[name="tip"]')` and reset then cleared correctly.

**Totals remaining visible after reset**  
Spans displaying totals persisted after reset. Added explicit `style.display = 'none'` to the reset function for both to clear.

**Variable shadowing breaking tip/total display**  
`tipAmountPerPerson` and `totalPerPerson` were declared at the top level as DOM element references, then re-declared inside `calculateTip` as calculated values — the inner `let` declarations shadowed the outer const ones. No error was thrown; the function silently used the wrong values, since the outer DOM references were unreachable from inside the function. Renamed the inner variables to `tipAmountValue` and `totalValue` and used in `calculateTip()`.

**Error state persisting on reset**  
`numberOfPeopleInput` styling remained on reset, not removing the "error" class. Added `numberOfPeopleInput.classList.remove("error")` to the reset function which resolved it.

---

## Future

- Add `%` to custom input placeholder text to indicate to user that they can enter a 2-digit value that doesn't appear in the radio options.
- Focus states on radios aren't accessible. In Chrome, they skip over when tabbing through the form. In Firefox, they only hit the first instance, indicated by a small circle which isn't easy to see, and then skips over the other radios straight to custom. Other focus states function normally.
- The reset button has an inactive style on the design brief, in a darkened state. A blend mode or alternative could be used to dim this button until totals are shown.
