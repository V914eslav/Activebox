$(function () {
  let header = $("#header");
  let banner = $("#banner");
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    let bannerHeight = banner.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > bannerHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
    console.log(scrollPos);
  });
});
