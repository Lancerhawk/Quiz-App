const questions = [
    {
        question: "What is 2 + 2?",
        options: ['1', '22', '3', '4'],
        answer: '4'
    },{
        question: "What is 2 + 5?",
        options: ['1', '25', '7', '5'],
        answer: '7'
    }
]

const questionE1 = document.getElementById("question");
const optionlist = document.getElementById("option-list");

let currentQuestion = 0;

function LoadContent(){
    const q = questions[currentQuestion];
    questionE1.textContent = q.question;
    optionlist.innerHTML = "";

    q.options.forEach(option =>{
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => Answer(li, q.answer)
        optionlist.appendChild(li);
    });
};

let score = 0;
function Answer(currentlist, answer){
    const allOptions = optionlist.querySelectorAll("li");
    allOptions.forEach(li => li.style.pointerEvents = "none");    

    if(currentlist.textContent === answer){
        currentlist.style.backgroundColor = "green";
        score++;
    }else{
        currentlist.style.backgroundColor = "red";
    };
};

const nextbtn = document.getElementById("Next-btn");
const scoretext = document.getElementById("score-card");
const scorecontainer = document.getElementById("score-section");

nextbtn.onclick = () =>{
    if(currentQuestion < questions.length - 1){
        currentQuestion++;
        LoadContent();
    }else{
        showScore();
    }
}

function showScore(){
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("Next-btn").classList.add("hidden");
    scorecontainer.classList.remove("hidden");

    scoretext.textContent = `Your Score is ${score} out of ${questions.length}`
}

LoadContent();