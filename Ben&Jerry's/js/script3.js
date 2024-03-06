$(function () {
  let h = false;
  $(".p1").click(function () {
    if (h == false) {
      $(".exel").animate({ height: "112px", padding: "10px 13px" }, 300);
      $(".p1 span").addClass("on");
      h = true;
      console.log(h);
    } else {
      $(".exel").animate({ height: 0, padding: "0px 13px" }, 300);
      $(".p1 span").removeClass("on");
      h = false;
      console.log(h);
    }
    // $('.exel').animate({'height':'112px'},300)
  });
  $(".p2").click(function () {
    $(".allergy .detail").slideToggle();
    $(".p2 span").toggleClass("on");
  });
});
