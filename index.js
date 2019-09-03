import words from './words.js';

let current_word_index = -1;

function nextWord() {
    current_word_index = ++current_word_index < words.length ? current_word_index : 0;

    return words[current_word_index];
}

function nextElementOf(collection, current_index = -1) {
    current_index = ++current_index < collection.length ? current_index : 0;

    return { word: collection[current_index], index: current_index };
}

function render(word) {
    console.log(`${word.en} -> ${word.translation}`);
    const word_canvas = document.getElementsByClassName('word')[0];
    const translation_canvas = document.getElementsByClassName('translation')[0];

    word_canvas.innerHTML = word.en;
    translation_canvas.innerHTML = `[ ${word.translation} ]`;
}

function clear() {
    document.getElementsByClassName('word')[0].innerHTML = "";
    document.getElementsByClassName('translation')[0].innerHTML = "";
}

/* =================================== */

clear();
render(nextWord());
setInterval(() => {
    const { word, index } = nextElementOf(words, current_word_index);
    current_word_index = index;
    render(word);
}, 10000);


