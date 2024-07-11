import { mcqs } from "./addmcq.js";

let mcqListHTML = "";
let score = 0;
let currentQuestion = 0;

mcqs.forEach(function (q1, index) {
  const { Q, a, b, c, d } = q1;
  let questions = `<div class="mcqList">
    <label>${Q}</label><br><br>
    <input type="radio" onclick="${checkAnswer('a')}" name="ans${index}" value="${a}">
    <label>${a}</label><br><br>
    <input type="radio" onclick="${checkAnswer('b')}" name="ans${index}" value="${b}">
    <label>${b}</label><br><br>
    <input type="radio" onclick="${checkAnswer('c')}" name="ans${index}" value="${c}">
    <label>${c}</label><br><br>
    <input type="radio" onclick="${checkAnswer('d')}" name="ans${index}" value="${d}">
    <label>${d}</label><br></br>
  </div>`;
 

  mcqListHTML += questions;
});

let page = document.querySelector('.mcq');
// page.innerHTML = mcqListHTML + `<br><button type="button" id="submitButton">Submit</button>`;
page.innerHTML = mcqListHTML; 

// function getAllAnswers() {
//     console.log("you are called.");
//   let eachMcq = document.getElementsByClassName('mcqList');
//   let score = 0;

//   for (let i = 0; i < eachMcq.length; i++) {
//     let radioButtons = eachMcq[i].querySelectorAll('input[type="radio"]');
//     let selectedValue = null;

//     for (let j = 0; j < radioButtons.length; j++) {
//       if (radioButtons[j].checked) {
//         selectedValue = radioButtons[j].value;
//         break;
//       }
//     }

//     let correctAnswer = mcqs[i].correctAnswer;

//     if (selectedValue !== null) {
//       console.log('Question ' + (i + 1) + ': Selected Value = ' + selectedValue);
//       if (selectedValue === correctAnswer) {
//         score++;
//       }
//     } else {
//       console.log('Question ' + (i + 1) + ': No option selected');
//     }
//   }

//   console.log('Your score is: ' + score + '/' + mcqs.length);
// }

// const submitButton = document.getElementById('submitButton'); 
// submitButton.addEventListener('click', getAllAnswers);


function checkAnswer(selected) {
    let eachMcq = document.getElementsByClassName('mcqList');
    let selectedValue = null;
    for (let i = 0; i < eachMcq.length; i++) {
       if(selected==mcqs[i].correctAnswer){
        score++;
       }
}
setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < mcqs.length) {
      showQuestion();
    }
    else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p>You got ${score} out of ${mcqs.length} questions.</p>`;
    }
  }, 2000);
}