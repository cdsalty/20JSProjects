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
  // Challenge: Change the div of toggle-icon when clicked so it says "Dark Mode" and changes icon
  console.log(toggleIcon.children);
  console.log("The Dark Side");
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.remove('fa-lightbulb', 'light-on');  // below I use other options such as replace
  toggleIcon.children[1].classList.add('fa-moon');
  image1.src = "img/undraw_proud_coder_dark.svg";
  image2.src = "img/undraw_feeling_proud_dark.svg";
  image3.src = "img/undraw_conceptual_idea_dark.svg";
}

// Light Mode Functionality
const lightMode = () => {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  console.log("Light Mode Enabled");
  toggleIcon.children[0].textContent = 'Light Mode';
  // toggleIcon.children[1].classList.replace('fa-moon', 'fa-lightbulb');  // prevents my light from turning back on....
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-lightbulb', 'light-on');
  image1.src = "img/undraw_proud_coder_light.svg";
  image2.src = "img/undraw_feeling_proud_light.svg";
  image3.src = "img/undraw_conceptual_idea_light.svg";
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