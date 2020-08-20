
const count = 10; // will serve as the starting point for the amount of pictures to return
// Unsplash API
const apiKey = 'k59C4PPe8QTSxOUWuFR8a3ZSVpojkfURvsQX-4V4VyI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json(); // returns array of ${count} objects
    console.log(data);
  } catch (error) {
    console.log(error)

  }
}

// Funtion to run on load
getPhotos();