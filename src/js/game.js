import { WORDS, KEYBOARD_LETTERS } from "./constants";

const gameDiv = document.getElementById("game");
const logo = document.getElementById("logo");

const createPlaceholdersHTML = () => {
  const word = sessionStorage.getItem("word");
  const wordArray = Array.from(word);

  const placeholdersHTML = wordArray.reduce((acc, curr, i) => {
    return acc + `<h1 id="letter_${i}" class="letter">_</h1>`;
  }, "");

  return `<div id="placeholders" class="placeholders-wrapper">${placeholdersHTML}</div>`;
};

const createKeyboard = () => {
  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  keyboard.id = "keyboard";

  const keyboardHTML = KEYBOARD_LETTERS.reduce((acc, curr) => {
    return (
      acc +
      `<button class="button-primary keyboard-btn" id=${curr}>${curr}</button>`
    );
  }, "");

  keyboard.innerHTML = keyboardHTML;
  return keyboard;
};

const createHangman = () => {
  const image = document.createElement("img");

  image.src = "images/hg-0.png";
  image.alt = "hangman-image";
  image.classList.add("hangman-img");
  image.id = "hangman-img";

  return image;
};

export const startGame = () => {
  logo.classList.add("logo-sm");
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  const wordToGuess = WORDS[randomIndex];

  sessionStorage.setItem("word", wordToGuess);

  gameDiv.innerHTML = createPlaceholdersHTML();

  gameDiv.innerHTML += `<p id="tries" class="mt-2">TRIES LEFT:<span id="tries-left" class="font-medium text-red-600"> 10</span></p>`;

  const keyboardDiv = createKeyboard();
  keyboardDiv.addEventListener("click", (event) => {
    event.target.id;
  });

  const hangmanImg = createHangman();
  gameDiv.prepend(hangmanImg);

  gameDiv.appendChild(keyboardDiv);
};
