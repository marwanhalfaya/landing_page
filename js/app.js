/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// counter to specify attributes and number of section
let counter = 0;
const createSection = () => {
  counter++;
  const navBar = `<section id="section${counter}" data-nav="Section ${counter}">`;
};

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * make list items equal to the number of sections by iterate on them*/

 const navBar = document.getElementById("navbar__list");
 const createNavItems = () => {
   navBar.innerHTML = "";
   document.querySelectorAll("section").forEach((section) => {
     const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
     navBar.insertAdjacentHTML("beforeend", listItem);
   });
 };


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// using Element.getBoundingClientRect() to provide information about the size of the element and its position relative to its view point 
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}


//on clicink the the icon it scrolls smoothly 
navBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});

/**
 * create four-section dynamically by javascript instead of HTML
 * create them links
 * ability to observe sections
 */
for (let i = 1; i < 5; i++) createSection();
createNavItems();

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active









