function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const correctAnswer = 'paris';
    const resultContainer = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        resultContainer.textContent = 'Correct! Well done.';
        resultContainer.style.color = 'green';
    } else {
        resultContainer.textContent = 'Incorrect. Try again.';
        resultContainer.style.color = '#f44336';
    }
}
