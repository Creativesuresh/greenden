/* Mobile Menu Script Start */
$(document)
.off("click", ".trigger__menunav--act")
.on("click", ".trigger__menunav--act", function (e) {
  
  e.stopPropagation();
  $("body").toggleClass("mbl__hiden");
  $(".mobile__menu").toggleClass("active");
});
  $(document).click(function (e) {
    if (!$(e.target).is(".trigger__menunav--act, .menu, .menu * ")) {
      if ($(".menu").is(":visible")) {
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("mbl__hiden");
      }
    }
  });


// if ($(".trigger__menunav--act").length > 0) {
//   $(document)
//     .off("click", ".trigger__menunav--act")
//     .on("click", ".trigger__menunav--act", function (e) {
//       e.stopPropagation();
//       $("body").toggleClass("mbl-hiden");
//       $(".mobile-menu").toggleClass("active");
//     });
//   $(document).click(function (e) {
//     if (!$(e.target).is(".trigger__menunav--act, .menu, .menu * ")) {
//       if ($(".menu").is(":visible")) {
//         $(".mobile-menu").removeClass("active");
//         $("body").removeClass("mbl-hiden");
//       }
//     }
//   });
// }

// if ($("#close_mobile_menu").length > 0) {
//   $(document)
//     .off("click", "#close_mobile_menu")
//     .on("click", "#close_mobile_menu", function (e) {
//       e.stopPropagation();
//       $(".mobile-menu").removeClass("active");
//       $("body").removeClass("mbl-hiden");
//     });
// }
/* Mobile Menu Script End */

/* Sticky Header Fixed Script */
$(window).scroll(function () {
    if ($(window).scrollTop() != 0) {
      $("header").addClass("small__sticky");
    } else {
      $("header").removeClass("small__sticky");
    }
  });
  /* Sticky Header End Script */