// PART ONE
const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmail_button.onclick = () => {
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML = 'That is ok👍'
        gmail_result.style.color = 'green'
    } else {
        gmail_result.innerHTML = 'Try again🤗'
        gmail_result.style.color = 'red'
    }
}

// PART TWO

const childBlock = document.querySelector('.child_block img');

let position = 0;

const maxPosition = document.querySelector('.parent_block').clientWidth - childBlock.clientWidth;

function move() {
    if (position < maxPosition) {
        position += 5;
        childBlock.style.left = `${position}px`;
        setTimeout(move, 24);
    }
}

move();
