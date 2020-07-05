const twitterBtn = document.getElementById("twitter-url");
const refreshBtn = document.getElementById("refresh-btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const loaderEl = document.getElementById("loader");

//Fetch Random Quotes

function fetchRandomQuotes() {
  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const quotes = data.content;
      const author = data.author;
      quoteEl.innerText = `${quotes}`;
      authorEl.innerText = `~ ${author}`;
    });
}

//Tweet

twitterBtn.addEventListener("click", () => {
  const quote = quoteEl.innerText;
  const author = authorEl.innerText;
  window.open(
    `https://twitter.com/intent/tweet?text=${quote} \n \n${author}`,
    "_blank"
  );
});

//EVENT LISTENERS
refreshBtn.addEventListener("click", () => {
  fetchRandomQuotes();
});
//Tweet

fetchRandomQuotes();

setTimeout(() => {
  loaderEl.classList.add("show");
}, 500);
