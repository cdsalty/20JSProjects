// If the data coming back is not null, then we want to add an eventlistener.
const setDrink = (section) => {
  section.addEventListener('click', (e) => {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id; // to retrieve the id for each cocktail the user clicks
    // console.log(id);

    // Local Storage | JSON (it is not necessary to use JSON.stringify() since it's already a string)
    localStorage.setItem('drink', id);  // enables me to click the picture and carry over the id to the new html page. 
  })
}

export default setDrink;







/*
- the reason to use e.preventDefault is to read the data and what's going on inside the console. I will remove once it's setup/working correctly.
When the user clicks on an image/title, I need to get that specific id. To accomplish, add event listener ON THE SECTION I am getting back.



https://www.thecocktaildb.com/api.php
\--> then to lookup full cocktail details by id: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
*/