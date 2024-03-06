$(function () {
  // menu 버튼을 클릭하면
  $(".btn_menu").click(function () {
    $("#menuBox").animate({ left: 0 }, 500);
    $(".cover").fadeIn(500);
  });
  // x 버튼을 클릭하면
  $(".btn_close").click(function () {
    $("#menuBox").animate({ left: "-100%" }, 500);
    $(".cover").fadeOut(500);
  });

  // 아코디언 메뉴
  $(".m_mainMenu .depth1>a").click(function () {
    $(this)
      .next()
      .slideToggle()
      .parents()
      .siblings()
      .find(".m_subMenu")
      .slideUp();

    // on class 추가
    $(this).toggleClass("on").parents().siblings().find("a").removeClass("on");
  });
});
