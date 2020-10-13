import presentDrinks from './src/presentDrinks.js';  // must use ".js"
// import searchForm from './src/searchForm.js'; // <--- Nope...
import './src/searchForm.js';

// drinks with 'a'
const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`


// event listener on load
window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL)
});




    // // info about specific drink
    // const idURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007