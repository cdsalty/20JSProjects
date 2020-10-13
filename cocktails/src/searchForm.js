// just checking for the value in the form; depending on that value, will run presentDrinks; console.log("Hello World from searchForm")
// console.log("daisy");

import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name = "drink"]');
// console.log(input);

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  // console.log(input.value);
  const value = input.value;

  if (!value) {
    return
  }
  // console.log(`The user input value is: ${value}`)
  presentDrinks(`${baseUrl}${value}`);  // retrieves http://127.0.0.1:5500/?drink=ab  -> drink = ab
})