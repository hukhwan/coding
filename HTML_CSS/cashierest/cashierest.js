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
    $slide.css("transition-duration", "0.3s");
    $slide.css("left", parseFloat($slide.css("left")) - 398 + "px");
  } else {
    $slide.css("transition-duration", "0s");
    $slide.css("left", "0px");
  }
}, 1000);

slideBannerStart2 = function () {
  slideBannerStart = setInterval(function () {
    const $slide = $(".sliderDiv .slideBanner");

    if ($slide.css("left") != "-1592px") {
      $slide.css("transition-duration", "0.3s");
      $slide.css("left", parseFloat($slide.css("left")) - 398 + "px");
    } else {
      $slide.css("transition-duration", "0s");
      $slide.css("left", "0px");
    }
  }, 1000);
};

function slideBannerStop() {
  clearInterval(slideBannerStart);
}

// $(document).on("click", slideRoof);

// function slideBanner() {}
