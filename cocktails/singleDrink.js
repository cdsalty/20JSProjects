// this will only run when the user opens the drink html; once the dom contnent loads, 
// then run callback callback functions.

import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

// *** THE REAL GOAL!!!! ****  ---> to retrieve the id being stored into local-storage and pass it into the new url
const presentDrink = async () => {
  // get id from local-storage
  const id = localStorage.getItem('drink');
  // console.log({ id })
  if (!id) {
    window.location.replace('index.html') // go back to home page
  } else {
    const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    displayDrink(drink);
  }
}
// IMPORTAnT to remember
window.addEventListener('DOMContentLoaded', presentDrink)


//Other: fetchDrinks takes a url  11007
