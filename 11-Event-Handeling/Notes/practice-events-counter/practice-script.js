// COUNTER EXERCISE

// Select the body element from index.html
const bod = document.body;
console.log(bod)
// Set an attribute of 'style' to the body tag and add a background color of anything other than white
bod.setAttribute('style', 'background: yellow')
/* -------------------------------------------------------------------------- */

// Create an h1 element
let ele1 = document.createElement('h1');
// Append a new h1 element to the body element as a child
document.body.appendChild(ele1);
// Add text to the h1 element 
ele1.innerText = 'This is my message to you.';
// Assign the background color of this element to something unique
ele1.style.backgroundColor = 'Purple'
// Set a new style attribute to the h1 element
ele1.setAttribute('style', 'font-size: 100px; background-color: purple' )
// Add font size to the h1Element

// Set the default text to the number zero
ele1.innerText = '0'
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const but = document.createElement('button')
// Append the button element to the body element
document.body.appendChild(but)
// Add text to the boxButton
but.innerText = "My favorite button +"
// Add a class attribute to boxButton
but.setAttribute('class', 'Fun' )
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const but2 = document.createElement('button')
// Add the button element to the body element
document.body.appendChild(but2)
// Add text to the button element
but2.innerText = 'This is Button 2 -'
// Add a class attribute of style to the button element
but2.setAttribute('style', 'background-color: red; color: blue; font-size: 35px')
/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value
let clicks = 0
but.setAttribute('onclick', 'increseCount()')

function increaseCount() {
    clicks += 1
    ele1.innerText = clicks;
}
// Create functionality that, when you click this button it decreases the h1 value

but2.setAttribute('onclick', 'decreaseCount()')

function decreaseCount() {
        clicks -= 1
        ele1.innerText = clicks;
}
/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 
