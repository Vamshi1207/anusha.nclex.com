const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    correct: 1,
    explanation: [
      "3 is incorrect because 2 + 2 equals 4.",
      "Correct! 2 + 2 equals 4.",
      "5 is incorrect because 2 + 2 equals 4."
    ]
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome"],
    correct: 1,
    explanation: [
      "Berlin is incorrect. It is the capital of Germany.",
      "Correct! Paris is the capital of France.",
      "Rome is incorrect. It is the capital of Italy."
    ]
  }
  // Add more questions here...
];

function displayQuestions() {
  const container = document.getElementById("quiz-container");

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}" onclick="showExplanation(${index}, ${i})">
          ${opt}
        </label><br>
      `).join("")}
      <div class="explanation" id="exp${index}"></div>
    `;

    container.appendChild(questionDiv);
  });
}

function showExplanation(questionIndex, selectedIndex) {
  const explanationDiv = document.getElementById(`exp${questionIndex}`);
  explanationDiv.innerHTML = questions[questionIndex].explanation[selectedIndex];
  explanationDiv.style.display = "block";
}

function calculateScore() {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) score++;
  });
  document.getElementById("score").innerText = `You scored: ${score} / ${questions.length}`;
}

displayQuestions();
