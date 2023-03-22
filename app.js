// Task 1 - The Fetch Bit
// - create an async function called getQuote
// - use fetch to send a GET request to 'https://meowfacts.herokuapp.com/' and store as 'response'
// - call the .json method on the response variable and store resolved value as 'data'
// - use 'data' to set the text of the h1 tag with id 'quote'

async function getQuote() {
  const response = await fetch('https://meowfacts.herokuapp.com/');
  const data = await response.json();
  document.getElementById('quote').textContent = data.data[0];
  quoteHistory(data.data[0]);
}

// Task 2 - On Click
// - add an event listener to the button with id 'new-quote-button' to call getQuote when clicked

document.getElementById('new-quote-button').addEventListener('click', getQuote);

// Task 3 - History
// - create a function that takes in a string ✅ 
// - create a new list from that string and add it to the <ol> tag with the id 'quote-history'
// -- create a variable for the list
// -- add variable to 
// - call this function within getQuote to store the quotes in the list

function quoteHistory(str) {
  const quoteList = document.getElementById('quote-history');
  // create a variable 'listCheck' and assign to it an array with a spread operator
  // that finds all the nodes within the list and checks if any of them have text 
  // identical to the incoming string
  const listCheck = [...quoteList.children].find(child => child.textContent === str);

  // the ! before listCheck essentially inverts it's value
  // if listCheck does not find any matching list children, create a new list element and add to the list
if (!listCheck) {
  const newQuote = document.createElement('li');
  newQuote.textContent = str;
  quoteList.appendChild(newQuote);
}
}

// Bonus task (see lines 77-82)
// - change the code to include a check for existing list entries
// -- create a variable for the check
// -- look inside the list array
// -- are any of the children of the list equal to the incoming string?
// - if the incoming string matches any existing list items, do not add the new string