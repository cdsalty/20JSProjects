import showDrinks from './src/presentDrinks.js';

// drinks with 'a'
const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`

// event listener on load
window.addEventListener("DOMContentLoaded", () => {
  showDrinks(URL)
});




    // // info about specific drink
    // const idURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007