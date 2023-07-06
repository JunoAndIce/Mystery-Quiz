
// Credits to Cortez on codepen.io 

var toggleSwitch = document.querySelector('.dark-theme input[type="checkbox"]');
var currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
      // Checks the checkbox element
        toggleSwitch.checked = true;
    }
}

// function to change theme.
function switchTheme(event) {

  if (event.target.checked) {
    // finds the data-theme attribute in css and sets it's value to dark 
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  else {        
    // finds the data-theme attribute in css and sets it's value to light 
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);