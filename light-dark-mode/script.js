const toggleSwitch = document.querySelector('input[type="checkbox"]'); // in order to add event listener to check when the switch is on or off. 
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode Function
const darkMode = () => {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  console.log(toggleIcon.children);
}


// Switch Teme Functionality: making use of 'setAttribute' (https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
  console.log(event); // confirmed that I am getting the event; I need to target property, which is checked as true or false;
  // console.log(event.target.checked);
}


toggleSwitch.addEventListener('change', switchTheme)

// If checked yes, we want dark mode: (https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)

/*
Need to use switchTheme function to call two separate functions: one for dark mode and one for light mode

*/