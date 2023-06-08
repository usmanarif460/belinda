const questions = ["question-0", "question-1", "question-2", "question-3"];
let currentQuestionIndex = 0;
const CONGRATULATE_BLOCK = "congratulate-block";
const CHAT_BLOCK = "chat-block";
const CHAT_BLOCK_INPUT_ELEMENT = "chat-input-elem";
const CHAT_BLOCK_INPUT_ELEMENT_MOBILE = "chat-input-elem-mobile";

const answerButtons = document.querySelectorAll(".answer");

const hideQuestions = () => {
  questions.forEach((question) => {
    document.getElementById(question)?.classList.add("d-none");
  });
};

// Function to show the current question and hide the previous one
const showQuestion = () => {
  // hide all blocks first
  hideQuestions();

  // Show next block
  const currentQuestion = document.getElementById(
    questions[currentQuestionIndex]
  );
  currentQuestion.classList.remove("d-none");

  if (currentQuestionIndex > 0) {
    const previousQuestion = document.getElementById(
      questions[currentQuestionIndex - 1]
    );
    previousQuestion.classList.add("d-none");
  }
};

// Function to handle button click and move to the next question
const handleAnswerClick = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    hideQuestions();
    document.getElementById("congratulate-block")?.classList.remove("d-none");
  }
};

// Add click event listener to answer buttons
answerButtons.forEach((button) => {
  button.addEventListener("click", handleAnswerClick);
});

// Show the first question initially
showQuestion();

const showChatBlock = () => {
  document.getElementById(CONGRATULATE_BLOCK)?.classList.add("d-none");
  document.getElementById(CHAT_BLOCK)?.classList.remove("d-none");
  document.getElementById(CHAT_BLOCK_INPUT_ELEMENT)?.focus();
  document.getElementById(CHAT_BLOCK_INPUT_ELEMENT).value = "Hi ";
  document.getElementById(CHAT_BLOCK_INPUT_ELEMENT_MOBILE)?.focus();
  document.getElementById(CHAT_BLOCK_INPUT_ELEMENT_MOBILE).value = "Hi ";
  animateText();
};

const animateText = () => {
  var txt =
    "Hey there! 🤩 This is Belinda, your new AI mentor. How can I assist you? 🤗";
  var i = 0;
  var speed = 50; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("chat-title").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      document
        .querySelectorAll(".text-field")
        ?.forEach((element) => (element.style.opacity = 1));
    }
  }
  typeWriter();
};
