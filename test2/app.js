function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(amount) || isNaN(percentage)) {
        alert('Пожалуйста, введите корректные значения.');
        return;
    }

    const tip = amount * (percentage / 100);
    const total = amount + tip;

    document.getElementById('total').innerText = total.toFixed(2);
}
