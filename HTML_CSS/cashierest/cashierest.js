var scrollTop = function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
};

$(".Btn").on("click", scrollTop);
// 버튼 클릭시 빠르게 상단으로 스크롤

//자산조회 창 open&close
let viewheaders = document.querySelectorAll(".navigation .viewMyMoney .view");
let viewart = document.querySelector(".navigation .viewMyMoney .mymoney");

for (var i = 0; i < viewheaders.length; i++) {
  viewheaders[i].addEventListener("mouseover", funct);
  viewheaders[i].addEventListener("mouseout", funct2);
}

function funct() {
  viewart.style.maxHeight = viewart.scrollHeight + "px";
}

function funct2() {
  viewart.style.maxHeight = "0px";
}

//menu창 open&close
let headers = document.querySelectorAll(".logIn .menu .anchor");
let art = document.querySelector(".logIn .menu article");

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("mouseover", func);
  headers[i].addEventListener("mouseout", func2);
}

function func() {
  art.style.maxHeight = art.scrollHeight + "px";
}

function func2() {
  art.style.maxHeight = "0px";
}
