import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

// takes any url, and if the correct url is used, then this is what I expect. 
const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);
  // display drinks
  // console.log(data);
  const section = await displayDrinks(data);  // go create a function that displays drinks
  console.log(section)
}

export default showDrinks;

