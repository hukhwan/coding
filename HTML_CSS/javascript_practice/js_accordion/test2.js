var headers = document.querySelectorAll(".dropdown-container header");

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", openCurrAccordion);
}

//Use this as the callback if you would like multiple dropdowns to be open
function openAccordion() {
  var parent = this.parentElement;
  var article = this.nextElementSibling;

  if (!parent.classList.contains("open")) {
    parent.classList.add("open");
    article.style.maxHeight = article.scrollHeight + "px";
  } else {
    parent.classList.remove("open");
    article.style.maxHeight = "0px";
  }
}

//Use this as the callback if you would like no more than one dropdown to be open
function openCurrAccordion() {
  for (var i = 0; i < headers.length; i++) {
    var parent = headers[i].parentElement;
    var article = headers[i].nextElementSibling;

    if (this === headers[i] && !parent.classList.contains("open")) {
      parent.classList.add("open");
      article.style.maxHeight = article.scrollHeight + "px";
    } else {
      parent.classList.remove("open");
      article.style.maxHeight = "0px";
    }
  }
}

// header = html header 태그의 모든 요소
// header[i를 헤더높이보다 커지기 전까지(같을때까지) 1씩 더한다.] 클릭하면 openCurrAccordion호출
// openCurrAccordion함수 open
// i를 헤더높이보다 커지기 전까지(같을때까지) 1씩 더한다.(i에 헤더높이값 할당?)
// parent = headers[i]의 부모
// article = header[i]의 형제(sibling->형제라는뜻)
// if   this가 headers[i] 와 같고 / 헤더s 부모의 클래스리스트가 "open"을 포함하고
//      있지 않!!다면  ->>>
//      헤더s 부모 클래스 "open"을 추가한다.
//      article스타일의 max-height에  scrollHeight(for문에서 분석한 header.hength의
//      + 숨겨진 높이포함 높이) + "px"를 할당
//      예상 css화면 max-height : 0px -> max-height : 306px;
// else (headers[i]와 같지않거나 헤더s부모클래스리스트에 open이 없다면) ---->>>>>>
//      headers부모의 클래스리스트에 open을 지우고
//      article스타일 max-height를 0px로 돌려라.

//요약.. openCurrAccordion
// 이 function은 i가 header높이를 구할때까지 반복된다.
//만약 이것이 headers i와 같고 부모클래스에 open이 없다면
// open을 추가 and css에 요소를 추가하고
// open이 있을 경우 open을 지우고 css에 요소를 0px로 바꾼다.

//

//

//jquery cmd버전확인
//Notes:
/* Adding the 'open' class to the dropdown allows us to create
 * easier stylings for the different components of the dropdown.
 * It basically acts as a way to style based on the state (open/closed).
 * The maxHeight style transition is the base functionality.
 *
 * Change the callback in line 4 to either openCurrAccordion or openAccordion
 * to see the two different behaviors commented above each function
 */

//More Advanced Notes:
/* If you had a nav menu with defined heights you could use the checkbox trick
 * common with mobile nav menus. However, height cannot be transitioned so we
 * use max-height. In addition, transitioning max-height to a percentage doesn't
 * function properly, we need to use javascript to find the height and set it as
 * a pixel value. If you have a pre-determined height for your dropdowns, you
 * could implement a version without javascript. Javascript does allow us a
 * little more flexibility in this instance.
 */
