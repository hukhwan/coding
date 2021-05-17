const elements = document.querySelectorAll(".element");

elements.forEach((element) => {
  let btn = element.querySelector(".buton");
  let icon = element.querySelector(".buton i");
  let answer = element.querySelector(".answer");
  let answers = element.querySelectorAll(".answer");

  btn.addEventListener("click", () => {
    answers.forEach((ans) => {
      let ansIcon = ans.parentElement.querySelector(".buton i");
      if (answer !== ans) {
        ans.classList.add("hideText");
        ansIcon.className = "fas fa-plus-circle";
      }
    });
    answer.classList.toggle("hideText");

    icon.className === "fas fa-plus-circle"
      ? (icon.className = "fas fa-minus-circle")
      : (icon.className = "fas fa-plus-circle");
  });
});
