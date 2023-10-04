// Get URL query info
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const yt = urlParams.get('yt')

document.addEventListener("DOMContentLoaded", function() {
  const convertButton = document.getElementById("convert");
  convertButton.addEventListener("click", convert);
});
async function convert() {
  const query = document.getElementById("convert-input").value;
  const newText = query.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/");
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = newText;
}
