const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
} 

const displayQuotes = quotes =>{
    const blockQuotes = document.getElementById('quotes');
    console.log(quotes);
    blockQuotes.innerHTML = quotes.quote;
}

loadQuote()