var headers = document.querySelectorAll(".subexp .todoList .todo");
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", openAccordion);
}

var makeNotice = document.querySelectorAll(".createTask .trigger");
for (let i = 0; i < headers.length; i++) {
  makeNotice[i].addEventListener("click", openAccordion);
}

function openAccordion() {
  let parent = this.parentElement;
  let article = this.nextElementSibling;

  if (!parent.classList.contains("open")) {
    parent.classList.add("open");
    article.style.maxHeight = article.scrollHeight + "px";
  } else {
    parent.classList.remove("open");
    article.style.maxHeight = "0px";
  }
}

const elements = document.querySelectorAll(".fa-ellipsis-v");

elements.forEach((element) => {
  let btn = element.querySelector(".fa-ellipsis-v");
  let answer = element.querySelector(".answer");
  let answers = element.querySelectorAll(".answer");

  btn.addEventListener("click", () => {
    answers.forEach((ans) => {
      if (answer !== ans) {
        ans.classList.add("hideText");
        ansIcon.className = "fas fa-plus-circle";
      }
    });
    answer.classList.toggle("hideText");

  });
});
