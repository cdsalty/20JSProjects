// console.log("sanity-check");

// FETCH DATA 
const getUrlData = async () => {
  const url = "https://dog.ceo/api/breeds/list/all";
  const response = await fetch(url);  // No more action until the response is received.
  const data = await response.json();
  // console.log(data);  // I want data to be passed into a function that will place it inside a select/dropdown list
  const listOfDogBreeds = data.message
  createBreedList(listOfDogBreeds)
}
// GET the FETCHed DATA
getUrlData();

// SELECT ELEMENT: return the data fetched into a switch/select element
const createBreedList = (breedList) => {
  document.getElementById("breed").innerHTML = `
    <select onchange = "loadByBreed(this.value)">
    <option>Choose a Dog Breed</option>
    ${Object.keys(breedList).map((breed) => {
    return `<option>${breed}</option>`
  }).join('')}
    </select>
  `
  // "this.value" is being used to call on whatever is selected inside the the select drop-down ****
}

// DogBreed API call (passing in the breed of the dog)
// PRIMARY JOB IS TO "L O A D" THE DATA
const loadByBreed = async (dogBreed) => {
  // console.log(dogBreed); RETURNS THE DOG BREED SELECTED
  if (dogBreed != "Choose a Dog Breed") {
    // fetch dog breed api
    const dogBreedApi = `https://dog.ceo/api/breed/${dogBreed}/images`;
    const response = await fetch(dogBreedApi);
    const data = await response.json();
    console.log(data.message);
    // make it happen! show the images!
    createSlideShow(data.message);  // data.message represents images in the createSlideShow function
  }
}
// PRIMARY FUNCTIONALITY: TO CREATE THE HTML FOR THE EMPTY SLIDESHOW DIV
const createSlideShow = (images) => {
  // console.log(dataMessagesImages  )
  document.getElementById("slideshow").innerHTML = `
    <div class="slide" style = "background-image: url('${images[0]}')"></div>
    <div class = "slide"></div>
  `
}