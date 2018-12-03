$("#open").on("click", () => {

  $("html").css({
    overflow: "hidden",
  })

  $("#open").css({
    transform: "rotate(180deg)",
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

  $("#open").css({
    transform: "rotate(0deg)",
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




//Dzien - Noc

let click = 0;
$(".motyw").on("click", () => {

  if(click == 0) {

    //przesuwak
    $("#circle")
    .css({
      background: "rgb(51, 51, 51)",
    })
    .animate({
      marginLeft: "135px",

    }, 300)

    //zmiana kolorow
    $(".menu").css({
      background: "rgb(50, 52, 54)",

    })

    $("body").css({
      background: "rgb(36, 38, 41)",

    })

    $("#text-art").css({
      background: "rgb(40, 40, 40)",
      color: "rgb(147, 147, 147)",

    })

    $(".glow").css({
      background: "rgb(66, 66, 66)",
      color: "rgb(195, 195, 195)",

    })

    $(".menu__bar").css({
      background: "url('../img/usmiech-light.png') center center no-repeat",
      backgroundSize: "100px",

    })








    click++;

  } else {

    //przesuwak
    $("#circle")
    .css({
      background: "",
    })
    .animate({
      marginLeft: "10px",

    }, 300)

    //zmiana kolorow
    $(".menu").css({
      background: "",

    })

    $("body").css({
      background: "",

    })

    $("#text-art").css({
      background: "",
      color: ")",

    })

    $(".glow").css({
      background: "",
      color: "",

    })


    click = 0;
  }


})
