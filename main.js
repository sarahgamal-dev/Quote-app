const quotes = [{
    text: " It 's not what happens to you, but how you react to it that matters.",
    author: "--Epictetus"
}, {
    text: "The best revenge is massive success.",
    author: "--Frank Sinatra"
}, {
    text: "Resentment is like drinking poison and waitingfor your enemies to die.",

    author: "--Nelson Mandela"
}, {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "--Epictetus"
}, {
    text: " Do not take life too seriously.You will notget out alive.",

    author: "--Elbert Hubbard"

}];

function showquote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteObj = quotes[randomIndex];
    document.getElementById("quote").textContent = `"${quoteObj.text}"`;
    document.getElementById("author").textContent = `- ${quoteObj.author}`;
}