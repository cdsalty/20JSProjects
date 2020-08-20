const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// variable for photosArray
let photosArray = [];

// Unsplash API
const apiKey = 'k59C4PPe8QTSxOUWuFR8a3ZSVpojkfURvsQX-4V4VyI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const count = 10; // represents how many pictures to return/display.  

// Create Elements for Links & Photos; Add to Dom
const displayPhotos = () => {
  photosArray.forEach((photo) => {
    // create <anchor> element to link to Unsplash
    const item = document.createElement('a'); // creates a blank anchor element
    // add attributes to item
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank'); // will open in a new window

    // Create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);

    // Put <img> inside <a>; then put inside imageContainer Element

  });
}


// Get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    // const data = await response.json(); // returns array of ${count} objects
    photosArray = await response.json(); // store inside an array state
    displayPhotos();
  } catch (error) {
    console.log(error)

  }
}

// Funtion to run on load
getPhotos();