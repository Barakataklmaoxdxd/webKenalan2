const quotes = ["17 Tahun", "Suka Bakso", "169km",]

function randomQuotes() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("text").innerHTML = quotes[random];
}
