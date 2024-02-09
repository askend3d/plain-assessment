async function returnJson() {
  const questionsAPI = await fetch(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz"
  ).then((response) => response.json());

  return questionsAPI;
}

let arrAnswer = [];

async function fetchDataAndProcess() {
  let data = await returnJson();
  arrAnswer = data.map((item) => item.answer);
}

const divs = document.querySelectorAll("form div")
let result = 0;

divs.forEach((div, index) => {
  div.addEventListener("click", (e) => {
    if (e.target.tagName !== 'INPUT') {
      return;
    }
    const counterSpan = document.querySelector("#aside-counter h3 span");

    const inputName = div.querySelector('input').name;
    const inputValue = div.querySelector('input').value;

    
    if (inputName === "q1") {
      if (inputValue == arrAnswer[0]) {
        div.classList.add("correct")
        result += 1
        
      } else {
        div.classList.add("incorrect");
        const correctOption = Array.from(div.children).find(
          (child) => child.querySelector("input").value == correctAnswer
        );
        correctOption.classList.add("correct");
      }
    }
    if (inputName === "q2") {
      if (inputValue == arrAnswer[1]) {
        div.classList.add("correct")
        result += 1;
      } else {
        div.classList.add("incorrect")
      }
    }
    if (inputName === "q3") {
      if (inputValue == arrAnswer[2]) {
        div.classList.add("correct")
        result += 1;
      } else {
        div.classList.add("incorrect")
      }
    }
    if (inputName === "q4") {
      if (inputValue == arrAnswer[3]) {
        div.classList.add("correct")
        result += 1;
      } else {
        div.classList.add("incorrect")
      }
    }
    if (inputName === "q5") {
      if (inputValue == arrAnswer[4]) {
        div.classList.add("correct")
        result += 1;
      } else {
        div.classList.add("incorrect")
      }
    }
    counterSpan.innerHTML = `${result}/5`
  });
});
fetchDataAndProcess()
