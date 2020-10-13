import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);
  // display drinks (await the data to come back)
  const section = await displayDrinks(data);  // function to displays drinks
  // console.log(section);

}

export default showDrinks;

