const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

const count = 10; // represents how many pictures to return/display.  
// variable for photosArray
let photosArray = [];

// Unsplash API
const apiKey = 'k59C4PPe8QTSxOUWuFR8a3ZSVpojkfURvsQX-4V4VyI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// HELPER FUNCTION (to make code cleaner and DRY)
const setAttributes = (element, attributes) => {
  // FOR EACH INDIVIDUAL KEY IN THAT IS INSIDE OF ATTRIBUTES, return the key and the attribute TO THAT SPECIFIC KEY. 
  for (const key in attributes) {
    // element.setAttribute(key, attributes[key])
    return element.setAttribute(key, attributes[key])
  }
}


// Create Elements for Links & Photos; Add to Dom
function displayPhotos() {
  photosArray.forEach((photo) => {
    // create <anchor> element to link to Unsplash
    const item = document.createElement('a'); // creates a blank anchor element
    // set and add attributes to item
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // item = <a href = "'photo.links.html' tartget='_blank'">
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });
    // setAttributes function removes the unnecesary code below.
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);
    // <img src = "photo.urls.regular" alt = "photo.alt_description" title="photo.alt_description" >

    // Put <img> inside <a>; then put inside imageContainer Element
    item.appendChild(img);  // 1st: take the item varaible(anchor tag) and append to it the image element
    imageContainer.appendChild(item); // 2nd: add the item element created to the DOM inside the imageContainer class
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