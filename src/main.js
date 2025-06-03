// Define the possible suits and values
const suits = ["♠", "♥", "♣", "♦"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const randomSuit = suits[Math.floor(Math.random() * suits.length)];
const randomValue = values[Math.floor(Math.random() * values.length)];

const topSuitEl = document.querySelector(".card-suit.top");
const bottomSuitEl = document.querySelector(".card-suit.bottom");
const valueEl = document.querySelector(".card-value");

topSuitEl.textContent = randomSuit;
bottomSuitEl.textContent = randomSuit;
valueEl.textContent = randomValue;

if (randomSuit === "♥" || randomSuit === "♦") {
  topSuitEl.classList.add("red");
  bottomSuitEl.classList.add("red");
  valueEl.classList.add("red");
}