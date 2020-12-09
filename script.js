// Neste documento uso o texto html para fazer a contagem do elemento javascript.

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
        choice1: "Menos de R$1000",
        choice2: "Um pouco mais de R$1000",
        choice3: "O céu é o limite",
        answer10: 1,
        answer20: 2,
        answer30: 3,
    },
    {
        question: "Gosta de jogar?",
        choice1: "Não",
        choice2: "Às vezes",
        choice3: "Muito",
        answer1: 1,
        answer2: 2,
        answer3: 3,
    },
    {
        question: "Vídeos e séries?",
        choice1: "Não",
        choice2: "Às vezes",
        choice3: "Muito",
        answer4: 1,
        answer5: 2,
        answer6: 3,
    },
];

// Valores para Barato, Intermediario e Caro
const BONUS10 = 10;
const BONUS20 = 40;
const BONUS30 = 80;

// Valores para jogo
const BONUS0 = 0;
const BONUS1 = 1;
const BONUS2 = 3;

//Valores para Video

//const BONUS3 = 3;
const BONUS4 = 6;
const BONUS5 = 7;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};


getNewQuestion = () => {
    if (availableQuesions.length === 0) {
        //BARATO
        if (score == 10) {
            //alert("Geral Barato")
            document.getElementById("gb").removeAttribute("style"); 
        }
        if (score ==  11 || score == 13 || score == 19 || score == 20) {
            //alert("Jogo Barato");
            document.getElementById("jb").removeAttribute("style"); 
        }
        if (score == 16 || score == 17 || score == 18) {
            //alert("Video Barato");
            document.getElementById("vb").removeAttribute("style"); 
        }
        //MEDIO
        if (score == 40) {
            //alert("Geral Medio");
            document.getElementById("gm").removeAttribute("style"); 
        }
        if (score == 41 || score == 43 || score == 49 || score == 50) {
            //alert("Jogo Medio");
            document.getElementById("jm").removeAttribute("style"); 
        }
        if (score == 46 || score == 47 || score == 48) {
            //alert("Video Medio");
            document.getElementById("vm").removeAttribute("style"); 
        }
        //CARO
        if (score == 80) {
            //alert("Geral Caro");
            document.getElementById("gc").removeAttribute("style"); 
        }
        if (score == 81 || score == 83 || score == 89 || score == 90) {
            //alert("Jogo Caro");
            document.getElementById("jc").removeAttribute("style"); 
        }
        if (score == 86 || score == 87 || score == 88) {
            //alert("Video Caro");
            document.getElementById("vc").removeAttribute("style"); 
        }

        
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
        
        // VALIDAÇÃO PARA BARATO, MEDIO E CARO
        const classToApply10 = selectedAnswer == currentQuestion.answer10 ? "correct10" : "incorrect" ;

        if (classToApply10 === "correct10") {
            incrementScore(BONUS10);
        }

        const classToApply20 = selectedAnswer == currentQuestion.answer20 ? "correct20" : "incorrect" ;

        if (classToApply20 === "correct20") {
            incrementScore(BONUS20);
        }

        const classToApply30 = selectedAnswer == currentQuestion.answer30 ? "correct30" : "incorrect" ;

        if (classToApply30 === "correct30") {
            incrementScore(BONUS30);
        }

        //VALIDAÇÃO PARA JOGO
        const classToApply0 = selectedAnswer == currentQuestion.answer1 ? "correct0" : "incorrect" ;

        if (classToApply0 === "correct0") {
            incrementScore(BONUS0);
        }

        const classToApply1 = selectedAnswer == currentQuestion.answer2 ? "correct1" : "incorrect" ;

        if (classToApply1 === "correct1") {
            incrementScore(BONUS1);
        }

        const classToApply2 = selectedAnswer == currentQuestion.answer3 ? "correct2" : "incorrect" ;

        if (classToApply2 === "correct2") {
            incrementScore(BONUS2);
        }

        //VALIDAÇÃO PARA VIDEO
        const classToApply3 = selectedAnswer == currentQuestion.answer4 ? "correct3" : "incorrect" ;

        if (classToApply3 === "correct3") {
            incrementScore(BONUS0);
        }

        const classToApply4 = selectedAnswer == currentQuestion.answer5 ? "correct4" : "incorrect" ;

        if (classToApply4 === "correct4") {
            incrementScore(BONUS4);
        }

        const classToApply5 = selectedAnswer == currentQuestion.answer6 ? "correct5" : "incorrect" ;

        if (classToApply5 === "correct5") {
            incrementScore(BONUS5);
        }

        selectedChoice.parentElement.classList.add(classToApply10);
        selectedChoice.parentElement.classList.add(classToApply20);
        selectedChoice.parentElement.classList.add(classToApply30);
        selectedChoice.parentElement.classList.add(classToApply0);
        selectedChoice.parentElement.classList.add(classToApply1);
        selectedChoice.parentElement.classList.add(classToApply2);
        selectedChoice.parentElement.classList.add(classToApply3);
        selectedChoice.parentElement.classList.add(classToApply4);
        selectedChoice.parentElement.classList.add(classToApply5);

        getNewQuestion();
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};



startGame();