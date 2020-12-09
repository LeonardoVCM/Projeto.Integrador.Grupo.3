// Neste documento uso o texto html para fazer a contagem do elemento javascript.

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let modelo = document.querySelector(".card-title");
let foto = document.querySelector(".foto");
let texto = document.querySelector(".card-text");

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
        question: "Assiste vídeos, filmes e séries?",
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
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "LG K41s";
            foto.innerHTML += '<img class="card-img-top" src="img/LG k41s.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para o dia-a-dia!</strong> Possui tecnologia de leitor de digitais e 3 GB de RAM que vão garantir seus aplicativos mais leves, como redes sociais, rodando com tranquilidade em segundo plano!"

        }
        if (score ==  11 || score == 13 || score == 19 || score == 20) {
            //alert("Jogo Barato");
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "Asus Zenfone Max M3";
            foto.innerHTML += '<img class="card-img-top" src="img/TESTEM3.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para jogos!</strong> Com um ótimo processador para a categoria e incríveis 4GB de RAM, é o melhor celular custo-benefício para quem adora jogar!"
        }
        if (score == 16 || score == 17 || score == 18) {
            //alert("Video Barato");
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "Samsung Galaxy A10";
            foto.innerHTML += '<img class="card-img-top" src="img/Galaxy a10.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para ver vídeos!</strong> Com uma boa qualidade de tela e resolução, é uma ótima opção de celular custo-benefício, além de possuir uma poderosa bateria para a categoria!"
        }
        //MEDIO
        if (score == 40) {
            //alert("Geral Medio");
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "Moto G8 Plus";
            foto.innerHTML += '<img class="card-img-top" src="img/moto g8 plus.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para o dia-a-dia!</strong> Com um excelente processador para a categoria e 4 GB de RAM, é mais do que capaz de manter seus aplicativos rodando em segundo plano!"
        }
        if (score == 41 || score == 43 || score == 49 || score == 50) {
            //alert("Jogo Medio");
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "Xiaomi Redmi Note 8 Pro";
            foto.innerHTML += '<img class="card-img-top" src="img/Note 8 pro.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para jogos!</strong> Com o poderoso processador Helio G90T e equipado com 6 GB de RAM, é o celular intermediário com o melhor desempenho em jogos, até mesmo pesados!"
        }
        if (score == 46 || score == 47 || score == 48) {
            //alert("Video Medio");
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "Samsung Galaxy M31";
            foto.innerHTML += '<img class="card-img-top" src="img/Galaxy m31.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para vídeos!</strong> Com uma tela Super AMOLED de altíssima qualidade, 6 GB de RAM, muito armazenamento, uma excelente câmera e uma bateria incrível, é uma das melhores opções custo-benefício!"
        }
        //CARO
        if (score == 80) {
            //alert("Geral Caro");
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "Iphone 11";
            foto.innerHTML += '<img class="card-img-top" src="img/Iphone 11.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para o dia-a-dia!</strong> Com a conhecida qualidade da Apple e a otimização do sistema operacional IOS para seus aparelhos, é garantia de um excelente desempenho para as atividades cotidianas!"
        }
        if (score == 81 || score == 83 || score == 89 || score == 90) {
            //alert("Jogo Caro");
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "Motorola Edge";
            foto.innerHTML += '<img class="card-img-top" src="img/Motorola Edge.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para jogos!</strong> Com um poderoso processador e uma tela de altíssima qualidade, é o smartphone ideal para quem adora jogar. Além disso é o primeiro com a tecnologia 5G, pronto para o futuro!"
        }
        if (score == 86 || score == 87 || score == 88) {
            //alert("Video Caro");
            document.querySelector(".rs").removeAttribute("style");
            modelo.innerText += "Samsung Galaxy S20 Plus";
            foto.innerHTML += '<img class="card-img-top" src="img/Galaxy s20 plus.jpg" widht="325" height="275"/>';
            texto.innerHTML += "<strong>Ideal para vídeos!</strong> Com uma impressionante tela Dinamyc AMOLED de 6.7' é a melhor alternativa na categoria pra quem adora assistir vídeos, filmes e séries no smartphone! Além de um excelente processador e muita memória RAM."
        }

        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${modelo.innerText}`)
    .then(response => response.json())
    .then(response => {

        let preco = document.querySelector("#precoresultado")
        preco.innerHTML += `<p id="cifrao"><strong>Melhor preço: R$ ${response.results[0].price}</strong> <button id="versite"><a href="${response.results[0].permalink}">Ver no site</a></button></p>`

      })
        
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