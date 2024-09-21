function generateNumbers() {
    let numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 10);

        let numberElement = document.createElement('div');
        numberElement.classList.add('number-box');
        numberElement.textContent = randomNumber;

        numbersDiv.appendChild(numberElement);
    }
}
