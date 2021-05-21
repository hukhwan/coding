const elements = document.querySelectorAll(".sharing");

elements.forEach((element) => {
  let btn = element.querySelector(".shareIcon");
  let icon = element.querySelector(".shareIcon shareImg");
  let answer = element.querySelector(".popup");
  let answers = element.querySelectorAll(".popup");

  btn.addEventListener("click", () => {
    answers.forEach((ans) => {
      let ansIcon = ans.parentElement.querySelector(".shareIcon shareImg");
      if (answer !== ans) {
        ans.classList.add("hideText");
        ansIcon.className = "fas fa-plus-circle";
      }
    });
    answer.classList.toggle("hideText");
  });
});
