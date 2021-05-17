const elements = document.querySelectorAll(".faqList");

elements.forEach((element) => {
  let btn = element.querySelector(".buton"); //   버튼
  let icon = element.querySelector(".buton i"); //+-아이콘
  let h1 = element.querySelector(".secheader h2");
  var answer = element.querySelector(".explain"); //                .answer
  var answers = document.querySelectorAll(".explain"); // .answer리스트?
  btn.addEventListener("click", () => {
    answers.forEach((ans) => {
      let ansIcon = ans.parentElement.querySelector(".buton i");
      let ansh1 = ans.parentElement.querySelector(".secheader h2");
      if (answer !== ans) {
        ans.classList.add("hideText");
        ansIcon.className = "fas fa-chevron-down";
        ansh1.className = "secondH";
      }
    });
    answer.classList.toggle("hideText");
    icon.className === "fas fa-chevron-down"
      ? (icon.className = "fas fa-chevron-up") && (h1.className = "secondH2")
      : (icon.className = "fas fa-chevron-down") && (h1.className = "secondH");
  });
});

// 선언 -> 버튼, 아이콘, 설명div, 설명란
// 버튼클릭시 => 설명란 의 반복문(ans)
// -> 우선 선언 ansIcon = ans(설명란의요소)의 부모 안에 있는 아이콘
// 만약 설명div 와 설명란ans가 같지 않을경우
// ans의 "hideText"를 추가하고
// ansIcon의 클래스이름은 +이다.
// "hideText"는 toggle(하나의 설정값에서 다른값으로 왔다갔다.)기능으로 작동한다.
// toggle은 상위btn.addEventListener에서 정의된 "click"으로 변경

// icon의 클래스 이름은 - / + (true / false)이다.  ( A ? B : C 연산)
