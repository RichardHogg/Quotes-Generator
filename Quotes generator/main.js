const quotes = [
  {
    name:'Coco Channel',
    quote:'Success is most often achieved by those who dont know that failure is inevitable.'
  },
  {
    name:'John Wooden',
    quote:'Things work out best for those who make the best of how things work out.'
  },
  {
    name:'Ernest Hemingway',
    quote:'Courage is grace under pressure.'
  },
  {
    name:'Albert Einstein',
    quote:'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.'
  },
  {
    name:'Walt Disney',
    quote:'All our dreams can come true if we have the courage to pursue them.'
  }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {  let number = Math.floor(Math.random()*quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
