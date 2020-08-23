const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;  // when page first loads, be false
let imagesLoaded = 0; // will follow the count as it ticks up to thirty
let totalImages = 0;  // will let us know when it's done loading everything
let photosArray = []; // variable for photosArray


// Unsplash API
const count = 30;
const apiKey = 'k59C4PPe8QTSxOUWuFR8a3ZSVpojkfURvsQX-4V4VyI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images loaded
const imageLoaded = () => {
  imagesLoaded++; // to increment the imagesLoaded value by one for each image loaded
  console.log(imagesLoaded)
  // determine if images are all loaded (should be a total of 30 on start)
  if (imagesLoaded === totalImages) {
    ready = true; // will only be true once everything is ready and loaded
    loader.hidden = true;
    console.log(`ready = ${ready}`);

  }
}

// HELPER FUNCTION (to make code cleaner and DRY)
const setAttributes = (element, attributes) => {
  // FOR EACH INDIVIDUAL KEY IN THAT IS INSIDE OF ATTRIBUTES, return the key and the attribute TO THAT SPECIFIC KEY. 
  for (const key in attributes) {
    // element.setAttribute(key, attributes[key])
    return element.setAttribute(key, attributes[key]) // --> why not just attributes since the key is already associated with it. 
  }
}


// Create Elements for Links & Photos; Add to Dom
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log(`total images: ${totalImages}`)
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

    // Event Listener to check when each image is finished loading
    img.addEventListener('load', imageLoaded);

    // Put <img> inside <a>; then put <a> inside imageContainer Element
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

// Scroll Event (check if near botttom)
window.addEventListener('scroll', (() => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    getPhotos()
    // console.log("calling getPhotos again");
    // after getting the photos, return ready to the state of 'false'
    ready = false;
  }
}));
// Funtion to run on load
getPhotos();


// window.innerHeight: TOTAL HEIGHT OF THE BROWSER WINDOW (fixed unless the window is resized)
// window.scrollY: DISTANCE FROM TOP OF PAGE THE USER HAS SCROLLED. (as the user is scrolling down) 
  // window.scrollY will continue to go up as the user scrolls further down the page.

  // Add these two numbers up on the left side of an if statment to compare them to...
    // ANSWER: document.body.offsetHeight THE HEIGHT OF EVERYTHING IN THE BODY, ((((  INCLUDING WHAT IS NOT IN THE VIEW   ))))
      // ---> (so when user hits about 3/4th the way down the page, or " 1000px or whatever amount you choose
      //        less than the document-offsetHeight")
          // ---> need to subtract from offsetHeight, TO TRIGGER EVENT BEFORE BOTTOM IS REACHED


/*
the left side needs to be bigger than the right side A N D the boolean conidition needs to "ready"
(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready)
(height of browswer window + distance from top of page that's been scrolled down too - 1000 && all the images are loaded) THEN call getPhotos

*/