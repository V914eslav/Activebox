$(function () {
  // Fixed Header
  let header = $("#header");
  let banner = $("#banner");
  let scrollPos = $(window).scrollTop();
  let bannerHeight = banner.innerHeight();

  checkScroll(scrollPos, bannerHeight);

  $(window).on("scroll load resize", function () {
    bannerHeight = banner.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, bannerHeight);
  });

  function checkScroll(scrollPos, bannerHeight) {
    if (scrollPos > bannerHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  let nav = $("#nav");
  let navToggle = $("#navToggle");
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;
    nav.removeClass("show");
    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  });
  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });
});
