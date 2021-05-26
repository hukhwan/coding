var scrollTop = function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
};

$(".Btn").on("click", scrollTop);
// 버튼 클릭시 빠르게 상단으로 스크롤