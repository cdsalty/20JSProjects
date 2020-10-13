import { showLoading } from './toggleLoading.js';
// will fetch a list a drinks object of an array of 25 items
const fetchDrinks = async (url) => {
  showLoading();
  // remember, returning promise
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }

}

export default fetchDrinks;