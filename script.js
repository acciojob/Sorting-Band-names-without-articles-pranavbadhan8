//your code here
const bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Remove articles from band names
const articles = ["the", "a", "an"];
const bandNamesWithoutArticles = bandNames.map((bandName) => {
  const words = bandName.split(" ");
  const filteredWords = words.filter((word) => !articles.includes(word.toLowerCase()));
  return filteredWords.join(" ");
});

// Sort band names without articles in lexicographic order
const sortedBandNames = bandNamesWithoutArticles.sort((a, b) => a.localeCompare(b));

// Output sorted band names inside ul element with id 'band'
const ulElement = document.createElement("ul");
ulElement.id = "band";
document.body.appendChild(ulElement);
sortedBandNames.forEach((bandName) => {
  const liElement = document.createElement("li");
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});
