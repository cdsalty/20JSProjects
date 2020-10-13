import get from './getElement.js';
import { hideLoading } from './toggleLoading.js'

const displayDrinks = ({ drinks }) => { // or data and then will have to further write data.drinks
  const section = get('.section-center');
  const title = get('.title');
  // console.log(drinks);
  if (!drinks) {
    // hide loading
    hideLoading();
    title.textContent = "Sorry, No drinks matched your search; Please try again.";
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks.map((drink) => {
    const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
    return `<a href="drink.html">
        <article class="cocktail" data-id="${id}">
          <img src="${image}" alt="${name}" />
          <h3>${name}</h3>
        </article>
      </a>`
  }).join(" ");
  // hide loading
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  // return section;
}

export default displayDrinks;


/*]

In this function, what matters the most is the 'drinks' variable getting passed in.
  - Drinks will be an array or null;


*/