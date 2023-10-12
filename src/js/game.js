import { WORDS, KEYBOARD_LETTERS } from './constants';

const gameDiv = document.getElementById('game');

const createPlaceholdersHTML = () => {

    const word = sessionStorage.getItem('word');
    const wordArray = Array.from(word);

    const placeholdersHTML =  wordArray.reduce((acc, curr, i) => {
        return  acc + `<h1 id="letter_${i}" class="letter">_</h1>`
    }, '');

    return `<div id="placeholders" class="placeholders-wrapper">${placeholdersHTML}</div>` 
}

export const startGame = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    const wordToGuess = WORDS[randomIndex];

    sessionStorage.setItem('word', wordToGuess);

    gameDiv.innerHTML = createPlaceholdersHTML();
}
