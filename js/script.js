/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
const quote = [
  {
    quote: 'The true sign of intelligence is not knowledge but imagination.',
    source: 'Alber Einstien',
    citation: '',
    year: '',
    tag: ''
  },
  {
    quote: 'The time will come when it will disgust you to look in the mirror.',
    source: 'Alber Einstien',
    citation: '',
    year: ''
  },
  {
    quote: 'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.',
    source: 'Alber Einstien',
    citation: '',
    year: ''
  },
  {
    quote: 'The true sign of intelligence is not knowledge but imagination.',
    source: 'Alber Einstien',
    citation: '',
    year: ''
  },
  {
    quote: 'The true sign of intelligence is not knowledge but imagination.',
    source: 'Alber Einstien',
    citation: '',
    year: ''
  },
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  const randNum = Math.floor(Math.random() * 6);
  return quote[randNum];
}


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function createSpan(element, _class, text) {
  let span = document.createElement(element);
  span.textContent = text;
  span.className = _class;
  document.querySelector('.source').appendChild(span);
}


function printQuote() {
  const randomQuote = getRandomQuote();
  const newColor = randomColor();
  const newQuote = `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}</p>
    `;
  document.getElementById('quote-box').innerHTML = newQuote;
  
  if (randomQuote.citation !== '') {
    createSpan('span', 'citation', randomQuote.citation);
  }

  if (randomQuote.year !== '') {
    createSpan('span', 'year', randomQuote.year)
  }
  document.getElementById('loadQuote').setAttribute('onmouseover', 'addHoverColor(this)');
  document.getElementById('loadQuote').setAttribute('onmouseleave', 'removeHoverColor(this)');
}


function randomColor() {
  const randColor1 = String(Math.floor(Math.random() * 255)) + ', ';
  const randColor2 = String(Math.floor(Math.random() * 255)) + ', ';
  const randColor3 = String(Math.floor(Math.random() * 255)) + ', ';
  document.body.style.backgroundColor = 'rgba(' + randColor1 + randColor2 + randColor3 + '1)';
  document.getElementById('loadQuote').style.backgroundColor = 'rgba(' + randColor1 + randColor2 + randColor3 + '1)';
}


function removeHoverColor(element) {
  const defaultButtonColor = document.body.style.backgroundColor;
  element.style.backgroundColor = defaultButtonColor;
}


function addHoverColor(element) {
  element.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
}


window.onload = () => {
  let quoteObject = {};
  setInterval(() => {
    printQuote();
  }, 20000);
  quoteObject.quote = document.querySelector('.quote').textContent;
  quoteObject.source = document.querySelector('.source').textContent.slice(0,16);
  quoteObject.citation = document.querySelector('.source').textContent.slice(16,23)
  quoteObject.year = document.querySelector('.source').textContent.slice(23,28)
  quote.push(quoteObject);
};

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", () => {
  printQuote();
}, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
