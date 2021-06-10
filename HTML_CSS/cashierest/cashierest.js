var scrollTop = function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
};

$(".Btn").on("click", scrollTop);
// 버튼 클릭시 빠르게 상단으로 스크롤

//자산조회 창 open&close

let viewheaders = document.querySelectorAll(".navigation .viewMyMoney .view");
let menuLogo = document.querySelector(".navigation .viewMyMoney .mymoney");

for (var i = 0; i < viewheaders.length; i++) {
  viewheaders[i].addEventListener("mouseover", funct);
  viewheaders[i].addEventListener("mouseout", funct2);
}

function funct() {
  menuLogo.style.maxHeight = menuLogo.scrollHeight + "px";
}

function funct2() {
  menuLogo.style.maxHeight = "0px";
}

//menu창 open&close
let headers = document.querySelectorAll(".logIn .menu");
let art = document.querySelector(".logIn .menu article");

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("mouseover", menuOpen);
  headers[i].addEventListener("mouseout", menuClose);
}

function menuOpen() {
  art.style.maxHeight = art.scrollHeight + "px";
}

function menuClose() {
  art.style.maxHeight = "0px";
}

// 슬라이더

// 1. 슬라이더 기본기능
//    4000 딜레이 후마다 .sliderDiv의 left값이 -400px씩 5번 반복하는 반복문.
//        - 슬라이드 4*(4000딜레이) + 1번. + 4000딜레이  :  for문 5번
//    위에 그룹으로 반복하는  반복문
//        - 조건 pause = true면 멈춤(pause클릭시) / false면 계속 반복
//

// 딜레이
// setTimeout(function () {}, 1000);
// bannerRoof
slideBannerStart = setInterval(function () {
  const $slide = $(".sliderDiv .slideBanner");

  if ($slide.css("left") != "-1592px") {
    $slide.css("transition-duration", "1s");
    $slide.css("left", parseFloat($slide.css("left")) - 398 + "px");
  } else {
    $slide.css("transition-duration", "0s");
    $slide.css("left", "0px");
  }
}, 2000);

slideBannerStart2 = function () {
  slideBannerStart = setInterval(function () {
    const $slide = $(".sliderDiv .slideBanner");

    if ($slide.css("left") != "-1592px") {
      $slide.css("transition-duration", "1s");
      $slide.css("left", parseFloat($slide.css("left")) - 398 + "px");
    } else {
      $slide.css("transition-duration", "0s");
      $slide.css("left", "0px");
    }
  }, 2000);
};

function slideBannerStop() {
  clearInterval(slideBannerStart);
}

function goPage1() {
  const $slide = $(".sliderDiv .slideBanner");
  $slide.css("left", "0px");
}

function goPage2() {
  const $slide = $(".sliderDiv .slideBanner");
  $slide.css("left", "-398px");
}
function goPage3() {
  const $slide = $(".sliderDiv .slideBanner");
  $slide.css("left", "-796px");
}
function goPage4() {
  const $slide = $(".sliderDiv .slideBanner");
  $slide.css("left", "-1194px");
}

function BannerHandingR() {
  const $slide = $(".sliderDiv .slideBanner");
  clearInterval(slideBannerStart);
  if ($slide.css("left") >= "-2000") {
    $slide.css("transition-duration", "1s");
    $slide.css("left", parseFloat($slide.css("left")) - 398 + "px");
  } else {
    $slide.css("transition-duration", "1s");
    $slide.css("left", "0px");
  }
}

function BannerHandingL() {
  const $slide = $(".sliderDiv .slideBanner");
  clearInterval(slideBannerStart);
  if ($slide.css("left") <= "0") {
    $slide.css("transition-duration", "1s");
    $slide.css("left", parseFloat($slide.css("left")) + 398 + "px");
  } else {
    $slide.css("transition-duration", "1s");
    $slide.css("left", "-1592px");
  }
}

// $(".afterIc").on("click", BannerHandingR);

// function slideBanner() {}

//슬라이드 전체보기 숨기기
var slideBnToggle = document.querySelector(".viewBnToggle");

slideBnToggle.addEventListener("click", OpClBn);

function OpClBn() {
  let parent = this.parentElement;
  if (!parent.classList.contains("open")) {
    parent.classList.add("open");
  } else {
    parent.classList.remove("open");
  }
}

//공지사항 데이터 & 슬라이드

//슬라이드 전체보기 숨기기

//C1. 1~5 리스트 html로 만들어놓고, class는 none으로 설정.
//C2. if 내부에 데이터가 있으면 class none삭제
//C3. css $aaa.text=$ 에 contents 넣기.

//C4. 가격이 전일대비 상승이면 이미지 클래스명 바꿔주고, 백그라운드 바꿔주고
//    몇일대비 상승하락인지 퍼센트 구하기.
//C5. 마켓 클릭시 .active 클래스가 추가되며 클릭한 마켓 데이터에 따른
//    Chapter 로직이 실행
// ** 챕터 3~4로직은 5초에 한번씩 불러오게 설정
