// local storage to display scores
// high scores is on a different page
// two js pages, one for each html page
// two css pages, one for each html page
// use dry code help 

var quizQuestions = [
    {
        question: "Who was the first president of the U.S.A.?",
        answers: [
             "a: George Washington",
             "b: Alexander Hamilton",
             "c: Ben Franklin"],
        
        correctAnswer: "a"
        },
    {
        question2: "",
        answers: {
            a: "",
            b: "",
            c: "",
        },
        correctAnswer: ""
        },
    {
        question3: "",
        answers: {
            a: "",
            b: "",
            c: "",
        },
        correctAnswer: ""
        },
    {
        question4: "",
        answers: {
            a: "",
            b: "",
            c: "",
        },
        correctAnswer: ""
        },
    {
        question5: "",
        answers: {
            a: "",
            b: "",
            c: "",
        },
        correctAnswer: ""
        },
    {
        question6: "",
        answers: {
            a: "",
            b: "",
            c: "",
        },
        correctAnswer: ""
        },                    
    ] 

    var startBtn = document.querySelector("#start-btn");
    var nextBtn = document.querySelector("#next-btn"); 
    var quesConEl = document.querySelector("#question-container");
    var questionEl = document.querySelector("#question");
    var answerEl = document.querySelector("#answer-btn");
    var timeEl = document.querySelector(".time")

    var count = 60;


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left in quiz.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}


    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++
        setNextQuestion()
    });

    function startQuiz() {
        
        
    }

    function setNextQuestion() {

    }
    function selectAnswer() {

    }

    
    

// var titleEl = document.getElementById("title");
// var imageEl = document.getElementById("image");
// var descriptionEl = document.getElementById("description");
// var nextBtnEl = document.getElementById("next");

// var count = 0;

// var pets = [
//     {
//         title: "Nature Cat",
//         image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//         cuteness: 8
//     },
//     {
//         title: "Cat Sleep",
//         image: "https://images.unsplash.com/photo-1556582305-528bffcf7af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         cuteness: 9
//     },
//     {
//         title: "Sibling Cats",
//         image: "https://images.unsplash.com/photo-1554396133-3ff490ac1c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         cuteness: 7
//     }
// ];
// function end() {
//     titleEl.textContent = "you are out of pets!"
//     imageEl.innerHTML = ""
//     var pictureEl = document.createElement("img");
//     descriptionEl.textContent = ""
//     nextBtnEl.textContent = "start over";
//     count = 0;

// }

// function changePhoto() {
//     if(count === 0) {
//         nextBtnEl.textContent = "Next"
//     }
//     if(count === pets.length) {
//         end()
//         return
//     }
//     titleEl.textContent = pets[count].title;
//     imageEl.innerHTML = "";
//     var pictureEl = document.createElement("img");
//     pictureEl.setAttribute("src", pets[count].image);
//     // pictureEl.setAttribute("alt", placeholder);
//     imageEl.appendChild(pictureEl);
//     descriptionEl.textContent = "Pet cuteness level: " + pets[count].cuteness;

//     count++;
// }

// nextBtnEl.addEventListener("click", changePhoto);