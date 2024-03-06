$(function () {
  // 비주얼
  $("#visual").slick({
    autoplay: true,
    arrows: true,
    dots: false,
  });

  // 갤러리
  $(".gallery").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
