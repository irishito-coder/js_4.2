function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator() {
    const operators = ['+', '-', '*', '/'];
    return operators[Math.floor(Math.random() * operators.length)];
}

function generateExample() {
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 20);
    const operator = getRandomOperator();
    
    const question = `${num1} ${operator} ${num2}`;
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = parseFloat((num1 / num2).toFixed(2));
            break;
    }

    return { question, correctAnswer };
}

function startQuiz() {
    const numberOfExamples = parseInt(prompt("Введите количество примеров для решения:"));
    let correctAnswersCount = 0;

    for (let i = 0; i < numberOfExamples; i++) {
        const { question, correctAnswer } = generateExample();
        const userAnswer = parseFloat(prompt(`Решите пример: ${question}`));

        if (userAnswer === correctAnswer) {
            alert(`Ваш ответ верный - ${correctAnswer}`);
            correctAnswersCount++;
        } else {
            alert(`Ваш ответ не верный - ${userAnswer}. Правильный ответ - ${correctAnswer}`);
        }
    }

    alert(`Вы правильно решили ${correctAnswersCount} из ${numberOfExamples} примеров.`);
}

// Запуск викторины
startQuiz();
