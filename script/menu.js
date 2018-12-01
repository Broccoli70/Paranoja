$("#open").on("click", () => {

  $("html").css({
    overflow: "hidden",
  })

  $(".menu_display")
  .css({
    display: "grid",
  })
  .animate({
    height: "100vh",
  }, 1000)

})

$("#back").on("click", () => {

  $("html").css({
    overflow: "auto",
  })

  $(".menu_display")
  .animate({
    height: "0vh",
  }, 750, () => {
      $(".menu_display").css({
      display: "none",
    })
  })

})
