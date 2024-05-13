const quotes = ["17 Tahun", "Suka Bakso", "170km", "minus 5", "i like blue"]

function randomQuotes() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("text").innerHTML = quotes[random];
}
