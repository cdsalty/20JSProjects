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
    // console.log(data.message);
    // make it happen! show the images!
    createSlideShow(data.message);  // data.message represents images in the createSlideShow function
  }
}
// PRIMARY FUNCTIONALITY: CREATE SLIDESHOW
const createSlideShow = (images) => {
  let currentPosition = 0;  // to be used to keep track of which image is being used
  // console.log(dataMessagesImages  )
  document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]}')"></div>
    <div class="slide" style = "background-image: url('${images[1]}')"></div>
  `
  // Add 2(places) for the currentPosition (currentPosition = currentPosition + 2;)
  currentPosition += 2;
  // Every 3 seconds, advance the currentPosition one more
  setInterval(nextSlide, 3000);

  // reCall the nextSlide function inside this scope (because we need access to the currentPositions current place inside the iteration)
  // ** PREVIOUSLY, I HAD an arrow function and this prevented it from calling nextSlide 
  // const nextSlide = () => { // ERROR: script.js:53 Uncaught (in promise) ReferenceError: Cannot access 'nextSlide' before initialization

  const nextSlide = () => {
    document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style = "background-image: url('${images[currentPosition]}')"></div>`);
    // remove the first image 
    setTimeout(() => {
      document.querySelector(".slide").remove()
    }, 1000);
    // Circle back to first image once list of images runs out
    if (currentPosition + 1 >= images.length) {
      currentPosition = 0
    } else {
      currentPosition++
    }
  }
}

// Left off at: https://youtu.be/AVmGmLFcukM?t=3541