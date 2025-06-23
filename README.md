# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

- [Overview](#overview)
- [Focus](#focus)
- [Outcome](#outcome)
- [Process](#process)
- [Built with](#built-with)
- [Lessons](#lessons)
- [Development](#development)
- [Useful resources](#useful-resources)

## Overview

## Focus

## Outcome

![]()

:jigsaw: [Live Site URL]()  
:pencil2: [Solution URL]()

## Built with

:gear: Semantic HTML5 markup  
:gear: CSS  
:gear: Mobile-first workflow  
:gear: Sass  
:gear: JavaScript

## To-do

- Fix `<ol>` overspilling on right side of container
- Use JS to style checked states on radio buttons - can't do it with CSS
- Do more JS on the tip calculator
- Finalise mobile

## Process

- Techniques necessary: DOM Manipulation & Event Handling
- Struggling with `<li>` covering `<input>`

## Time taken

:timer_clock:

## Lessons

1. A _floating point number_ in programming is what we refer to decimal or fractional numbers with, as opposed to an integer.
2. `<input>` values are always strings in Javascript, even if they're entered as numbers. Therefore, we need to convert them into the Number data type.
3. The `.toFixed()` method asks Javascript to convert the number value to a fixed decimal point with the number of places defined in the brackets e.g. `(2)`.
4. `+` is an adjacent sibling combintaor selector in CSS, it targets an element directly following, but not nested in the previous. They are siblings, not children.
5. Because here, my `<input>`'s are nested inside `<label>`, the `+` combinator won't work since they aren't siblings. Instead, I have to use JS to style the checked states. I hadn't done this before.
6. I created my first testing branch and merged with main :slightly_smiling_face:. I used git commands, `git checkout -b gridflex-testing`, `git push -u origin gridflex-testing` and `git checkout` and `git merge`.

## Development

-

## Useful resources

[<input type="email">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
[Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)

# tip-calculator-app
