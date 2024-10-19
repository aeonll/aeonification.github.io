// script.js

document.getElementById("button1").addEventListener("click", function () {
  // Get the viewport width and height
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  // Generate random x and y positions
  var randomX = Math.floor(Math.random() * (viewportWidth - 100)); // Subtracting button width
  var randomY = Math.floor(Math.random() * (viewportHeight - 50)); // Subtracting button height

  // Update button's position
  var button = document.getElementById("button1");
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";

  // Get all tweet divs
  var tweets = document.querySelectorAll("#tweets .tweet");

  // Hide all tweets initially
  tweets.forEach(function (tweet) {
    tweet.style.display = "none";
  });

  // Randomly select one tweet to show
  var randomIndex = Math.floor(Math.random() * tweets.length);
  tweets[randomIndex].style.display = "block";
});
