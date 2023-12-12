var arrayOfQuotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
];

function generateQuote() {
  var random = Math.floor(Math.random() * arrayOfQuotes.length);
  document.querySelector(
    "#quoteOutput"
  ).textContent = `"${arrayOfQuotes[random].quote}"`;
  document.querySelector(
    "#authorOutput"
  ).textContent = `--${arrayOfQuotes[random].author}`;
}
