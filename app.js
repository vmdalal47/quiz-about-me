const submit_button = document.getElementById("submit-button");
const clear_answers_button = document.getElementById("clear-answers-button");
const questions = document.getElementsByClassName("question");
const responses = document.getElementsByClassName("response");
const question_containers = document.getElementsByClassName("question-container");
const main_element = document.querySelector("main");

const number_of_questions = questions.length;
let number_of_questions_answered_correctly;

function check_answers() {
  let total_score;
  total_score = document.getElementById("total_score");
  if (typeof(total_score) != 'undefined' && total_score != null) {
    main_element.removeChild(total_score);
  }
  number_of_questions_answered_correctly = 0;
  for (let i = 0; i < questions.length; i++) {
    let response = responses[i];
    let question_container = question_containers[i];
    let answer_choices = question_container.getElementsByClassName("answer-choice");
    let was_this_question_answered = false;
    for (let j = 0; j < answer_choices.length; j++) {
      let answer_choice = answer_choices[j];
      if (answer_choice.checked) {
        if (answer_choice.classList.contains("correct-answer")) {
          response.innerHTML = "Correct!";
          response.style.color = "green";
          number_of_questions_answered_correctly++;
          was_this_question_answered = true;
        } else if (answer_choice.classList.contains("incorrect-answer")) {
          response.innerHTML = "Sorry, that is incorrect.";
          response.style.color = "red";
          was_this_question_answered = true;
        }
      }/*  else {
        response.innerHTML = "You forgot to respond!";
        response.style.color = "purple"; 
      } */
    if (was_this_question_answered === false) {
      response.innerHTML = "You forgot to respond!";
      response.style.color = "purple";
      }
    }
  }
  total_score = document.createElement("p");
  total_score.textContent = "You got " + number_of_questions_answered_correctly + " out of " + number_of_questions + " questions right!";
  total_score.id = "total_score";
  main_element.appendChild(total_score);
}


submit_button.addEventListener("click", check_answers);
clear_answers_button.addEventListener("click", () => {window.location.reload()});