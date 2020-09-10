const toggleSwitch = document.querySelector('input[type="checkbox"]'); // in order to add event listener to check when the switch is on or off. 


// Switch Teme Functionality:
const switchTheme = (event) => {
  if (event.target.checked) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
  console.log(event); // confirmed that I am getting the event and I need the target property which has the checked property as true
  console.log(event.target.checked);
}

// Event Listener:
toggleSwitch.addEventListener('change', switchTheme)

// If checked yes, we want dark mode: (https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)

