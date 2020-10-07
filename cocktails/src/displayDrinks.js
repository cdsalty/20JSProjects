import get from './getElement.js';

const displayDrinks = ({ drinks }) => { // or data and then will have to further write data.drinks
  const section = get('.section-center');
  const title = get('.title');
  // console.log(drinks);
  if (!drinks) {
    // hide loading
    title.textContent = "Sorry, No drinks matched your search; Please try again.";
    section.innerHTML = null;
    return;
  }

  const newDrinks = drinks.map((drink) => {
    return `<a href="drink.html">
        <article class="cocktail" data-id="1">
          <img src="./cocktail.jpg" alt="cocktail" />
          <h3>martini</h3>
        </article>
      </a>`
  }).join(" ");
  // hide loading
  title.textContent = "";
  section.innerHTML = newDrinks;
  // return section;
}

export default displayDrinks;


/*]

In this function, what matters the most is the 'drinks' variable we are passing in.
  - Drinks will be an array or null;


*/