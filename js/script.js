/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// ----- Variable Assignments ----- //
let counter = 1;
const quotes = [
  {
    quote: 'My favorite things in life don\'t cost any money. It\'s really clear that the most precious resource we all have is time',
    source: 'Steve Jobs',
    citation: 'Publication',
    year: '',
    tags: ['Inspring', 'Life'],
    index: '0'
  },
  {
    quote: 'Just because someone stumbles and loses their path, doesn’t mean they’re lost forever.',
    source: 'Professor X',
    citation: 'Movie',
    year: '2014',
    tags: ['Inspiring', 'Life', 'Movie'],
    index: '1'
  },
  {
    quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    source: 'Maya Angelou',
    citation: 'Publication',
    year: '',
    tags: ['Inpsiring', 'Life'],
    index: '2'
  },
  {
    quote: 'Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.',
    source: 'Alan Turing',
    citation: 'Movie',
    year: '2014',
    tags: ['Inpsiring', 'Movie'],
    index: '3'
  },
  {
    quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    source: 'Albert Einstien',
    citation: 'Publication',
    year: '',
    tags: ['Balance', 'Inpsiring', 'Life'],
    index: '4'
  },
];

// ---- Functions ---- //
// Generate random numbers and check if that number is the same the data-index of the quote
function getRandomQuote() {
  let randNum = Math.floor(Math.random() * 6);
  const dataIndex = parseInt(document.getElementById('quote-box').getAttribute('data-index'));

  if (randNum === 0 && dataIndex === 0) {
    return quotes[randNum + 1];
  } else if (randNum === 5 && dataIndex === 5) {
    return quotes[randNum - 1];
  } else if (randNum === dataIndex) {
    return quotes[randNum + 1];
  }
  return quotes[randNum];
}

// Print new quote
function printQuote() {
  const randomQuote = getRandomQuote();
  const newColor = randomColor();
  const index = randomQuote.index;
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

  let ul = document.createElement('ul');
  for (let i=0; i<randomQuote.tags.length; i++) {
    const li = document.createElement('li');
    li.textContent = randomQuote.tags[i];
    ul.appendChild(li);
  }
  ul.className = 'tags';
  document.getElementById('quote-box').appendChild(ul);
  document.getElementById('quote-box').setAttribute('data-index', index);
  document.getElementById('loadQuote').setAttribute('onmouseover', 'addHoverColor(this)');
  document.getElementById('loadQuote').setAttribute('onmouseleave', 'removeHoverColor(this)');
}

// Create span elements for citations and years
function createSpan(element, _class, text) {
  let span = document.createElement(element);
  span.textContent = text;
  span.className = _class;
  document.querySelector('.source').appendChild(span);
}

// Create an object of the starter quote and push it to quotes array
function pushQuoteObject() {
  let quoteObject = {};
  const tags = document.querySelector('.tags');
  quoteObject.quote = document.querySelector('.quote').textContent;
  quoteObject.source = document.querySelector('.source').textContent.slice(0,16);
  quoteObject.citation = document.querySelector('.source').textContent.slice(16,23)
  quoteObject.year = document.querySelector('.source').textContent.slice(23,28)
  quoteObject.tags = [];
  for (let item of tags.children) {
    quoteObject.tags.push(item.textContent);
  }
  quoteObject.index = '5';
  quotes.push(quoteObject);
}

// Generate random background color and button background color
function randomColor() {
  const randColor1 = String(Math.floor(Math.random() * 255)) + ', ';
  const randColor2 = String(Math.floor(Math.random() * 255)) + ', ';
  const randColor3 = String(Math.floor(Math.random() * 255)) + ', ';
  document.body.style.backgroundColor = 'rgba(' + randColor1 + randColor2 + randColor3 + '1)';
  document.getElementById('loadQuote').style.backgroundColor = 'rgba(' + randColor1 + randColor2 + randColor3 + '1)';
}

// Remove hover color from button
function removeHoverColor(element) {
  const defaultButtonColor = document.body.style.backgroundColor;
  element.style.backgroundColor = defaultButtonColor;
}

// Add hover color to button
function addHoverColor(element) {
  element.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
}
// AFter the page finished loading, calls printQuote function every 21 seconds and set data-index of the current quote's HTML to 5
window.onload = () => {
  setInterval(printQuote, 21000);
  pushQuoteObject();
  document.getElementById('quote-box').setAttribute('data-index', '5');
};

// ----- Event Listeners ----- //
// calls printQuote function when the button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
