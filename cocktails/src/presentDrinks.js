import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js'

const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);
  // display drinks (await the data to come back)
  const section = await displayDrinks(data);  // function to displays drinks
  // check/verify results coming back from section; IF YES, pass it to setDrink
  if (section) {  // only call setDrink if this, "section" is true. 
    setDrink(section);
  }

}

export default showDrinks;

