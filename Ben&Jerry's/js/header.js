$(function () {
  $(".menu>li>a").mouseenter(function () {
    $("header").stop().animate({ height: 220 }, 50);
    $("header").css({ background: "#6DCDEC" });
    $(".left_inner .menu>li>a").css({ color: "#fff" });
    $(".right_inner button svg").css({ fill: "#fff" });
    $(".left_inner h1 a").css({ background: "url(images/logo/logo2.png)" });
    $(".left_inner h1 a").css({ "background-size": "cover" });
  });
  $("header").mouseleave(function () {
    $("header").stop().animate({ height: 70 }, 10);
    $(this).css({ background: "#fff" });
    $(".left_inner .menu>li>a").css({ color: "#333" });
    $(".right_inner button svg").css({ fill: "#333" });
    $(".left_inner h1 a").css({ background: "url(images/logo/logo.png)" });
    $(".left_inner h1 a").css({ "background-size": "cover" });
  });
});
