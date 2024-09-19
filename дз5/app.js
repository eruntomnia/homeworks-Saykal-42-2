let trafficLights = document.querySelector("#message");

let greenButton = document.querySelector(".colors #green")
let yellowButton = document.querySelector(".colors #yellow")
let redButton = document.querySelector(".colors #red")

function changeMessage(text, color) {
    trafficLights.textContent = text;
    trafficLights.style.color = color;
}

greenButton.addEventListener('click', () => changeMessage('GO', 'green'));
yellowButton.addEventListener('click', () => changeMessage('WAIT', 'yellow'));
redButton.addEventListener('click', () => changeMessage('STAY', 'red'));
