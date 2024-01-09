const correctAnswers = ["C", "D", "C", "A", "A", "D", "A", "B", "B", "A"];
const form = document.querySelector(".quiz-form");
const showResults = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
    //
  });

  // Showing the score
  scrollTo(0, 0);
  showResults.querySelector("span").textContent = `${score}%`;
  showResults.classList.remove("d-none");
  setTimeout(function () {
    if (score < 50) {
      showResults.innerHTML += `<p class="second-paragraph">Olodo <i class="fa-regular fa-face-laugh"></i></p>`;
    }
  }, 3000);

  let output = 0;
  const timer = setInterval(() => {
    showResults.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 70);
});
