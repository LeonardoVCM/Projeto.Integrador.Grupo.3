// Neste documento uso o texto html para fazer a contagem do elemnto javascript.

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

// As perguntas a serem usadas
let questions = [
    {
        question: "Quanto pretende gastar?",
        choice1: "Menos de R$1000;",
        choice2: "Um pouco mais de R$1000;",
        choice3: "O céu é o limite.",
        answer: 1,
    },
    {
        question: "Gosta de jogar?",
        choice1: "Não;",
        choice2: "Razoavelmente;",
        choice3: "Muito.",
        answer: 1,
    },
    {
        question: "Vídeos e séries?",
        choice1: "Não;",
        choice2: "As vezes;",
        choice3: "Definitivamente sim.",
        answer: 1,
    },
];

const BONUS = 1;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0) {
        if (score == 0) {
            alert("You are THE FULL MOON, congratulations.");
        }
        if (score == 1) {
            alert("You are THE RISING MOON, congratulations.");
        }
        if (score == 2) {
            alert("You are THE RISING SUN, congratulations.");
        }
        if (score == 3) {
            alert("You are THE MIDDAY SUN, congratulations.");
        }

        return window.location.assign('answer.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        getNewQuestion();
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};



startGame();