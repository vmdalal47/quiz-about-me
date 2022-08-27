const submit_button = document.getElementById("submit-button");
const questions = document.getElementsByClassName("question");
const responses = document.getElementsByClassName("response");
const question_containers = document.getElementsByClassName("question-container");
const main_element = document.querySelector("main");

const number_of_questions = questions.length;
let number_of_questions_answered_correctly = 0;

function check_answers() {
  for (let i = 0; i < questions.length; i++) {
    let response = responses[i];
    let question_container = question_containers[i];
    let answer_choices = question_container.getElementsByClassName("answer-choice");
    for (let j = 0; j < answer_choices.length; j++) {
      let answer_choice = answer_choices[j];
      if (answer_choice.checked) {
        if (answer_choice.classList.contains("correct-answer")) {
          response.innerHTML = "Correct!";
          response.style.color = "green";
          number_of_questions_answered_correctly++;
        } else {
          response.innerHTML = "Sorry, that is incorrect.";
          response.style.color = "red";
        }
      } else {
        response.innerHTML = "You forgot to respond!";
        response.style.color = "purple";
      }
    }
  }
  let total_score = document.createElement("p");
  total_score.textContent = "You got " + number_of_questions_answered_correctly + " out of " + number_of_questions + " questions right.";
  main_element.appendChild(total_score);
}


submit_button.addEventListener("click", check_answers);
