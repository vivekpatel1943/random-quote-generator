let quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Everything you can imagine is real. – Pablo Picasso"
];
let newListOfQuotes = [];
newListOfQuotes.push(...quotes);
// console.log(newListOfQuotes);
document.getElementById('generate-quote').addEventListener('click', function () {
    
    let randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomQuote];
    console.log(quotes[randomQuote]);
    quotes.splice(randomQuote,1);
    // console.log(quotes);
  
    
    if (quotes.length == 0){
       
        quotes.push(...newListOfQuotes);
        console.log(quotes);
        
    }

})  