const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const counterInput = document.getElementById('counter');

incrementBtn.addEventListener('click', () => {
    let counterValue = parseInt(counterInput.value);
    if (counterValue < 10) {
        counterValue++;
    }
    counterInput.value = counterValue.toString();
});

decrementBtn.addEventListener('click', () => {
    let counterValue = parseInt(counterInput.value);
    if (counterValue > -10) {
        counterValue--;
    }
    counterInput.value = counterValue.toString();
});