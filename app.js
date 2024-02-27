// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


// const app = document.getElementById('app'); // Get element by ID - Selects a DOM element with an id assigned to it. (Most Efficent)


// const name = document.getElementsByName('Vader'); // Get element by Name - Get nodes with a name attribute 


// // Query Selector method allows us a way to use CSS selectors to select DOM elements (Pass any valid CSS selector)
// const codeEl = document.querySelector("code");
// console.log(codeEl);

// const app = document.querySelector("#app");
// console.log(app);

// const firstSelect = document.querySelector("input[type=checkbox]");
// console.log(firstSelect);

// const li = document.createElement('li');

// PART 1: 
// Select and cache the <main> element in a variable named mainEl.
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Set the content of mainEl to <h1>DOM Manipulation</h1>.

const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = '--main-bg';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// PART 2: 
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = '--top-menu-bg';
topMenuEl.classList.add('flex-around');

// PART 3: 

console.log(mainEl);