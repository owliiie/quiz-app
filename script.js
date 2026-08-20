const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Girraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Africa", correct: false},
            {text: "North America", correct: false},
            {text: "Oceania", correct: true},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest country in the world",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
    },
     {
        question: "What is the name of the green ogre guy made by DreamWorks?",
        answers: [
            {text: "Hulk", correct: false},
            {text: "Shrek", correct: true},
            {text: "Green Goblin", correct: false},
            {text: "The Grinch", correct: false},
        ]
    },
       {
        question: "What year did the Marvel Cinematic Universe start?",
        answers: [
            {text: "2007", correct: false},
            {text: "2008", correct: true},
            {text: "2009", correct: false},
            {text: "2010", correct: false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let maxQuestions = 5;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButtons.innerHTML = "";

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);

    answerButtons.appendChild(button);
});
}

function resetState(){

    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
    
    if (currentQuestionIndex >= maxQuestions) { 
        currentQuestionIndex = -1; 
    } 
    
}
function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {

        selectedBtn.classList.add("correct");
        selectedBtn.style.backgroundColor = "green";
        score++;

    }

    else { 

        selectedBtn.classList.add("incorrect");
        selectedBtn.style.backgroundColor = "red";

    }

     nextButton.disabled = false;

Array.from(answerButtons.children).forEach(button => {

    if (button.dataset.correct === "true") {

        button.classList.add("correct");
        button.style.backgroundColor = "green";

    }

    button.disabled = true;

});


nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => { 

    nextButton.disabled = true;

    if (nextButton.innerHTML =~ "Next") {
        nextButton.innerHTML = "Next";
    }

    if (currentQuestionIndex < maxQuestions) {
        currentQuestionIndex++;
        showQuestions();
    }

    else
        showScore();
    }

);
function showScore(){
    
    resetState(); 
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    score = 0;
    nextButton.disabled = false;

}

startQuiz();