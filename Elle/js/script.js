$(function () {
  // 비주얼
  $("#visual").slick({
    autoplay: true,
    arrows: true,
    dots: true,
  });

  // 이슈
  let tabBtn = $(".issue_title > li");
  let tabCont = $(".issue_contents > ul");
  tabCont.hide().eq(0).show();

  tabBtn.click(function () {
    const index = $(this).index();

    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  });

  // 보이스
  $(".voice_contents").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  });
});
