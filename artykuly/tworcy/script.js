$(function(){


  $(window).on("scroll", () => {

    let scroll =  $(document).scrollTop();
    let picHeight = $(".pic").height()/8 ;

    if(scroll > picHeight*1.5) {
      $("#name1")
      .animate({
        opacity: 1,
        marginTop: 0,

      }, 2000)

      $("#face1")
      .delay(500)
      .animate({
        opacity: 1,

      }, 2000)
    }

    if(scroll > picHeight*6) {
      $("#name2")
      .animate({
        opacity: 1,
        marginTop: 0,

      }, 2000)

      $("#face2")
      .delay(500)
      .animate({
        opacity: 1,

      }, 2000)
    }

  })



  //O AUTORACH
  $("#btn1").on("click", () => {
    $("html").css({
      overflow: "hidden",
    })
    $(".autor_display")
    .removeClass("animation")
    .addClass("showin")
    $(".autor_display")
    .css({
      display: "grid",
    })
    $(".autor__text")
    .delay(100)
    .animate({
      opacity: 0.5,
    }, 300)
    .animate({
      marginLeft: "350%",
      opacity: 1,
    }, 1500, ()=> {
      $(".autor__text").css({display: "none"})
    })

    $(".autor__pic")
    .delay(1250)
    .animate({
      marginLeft:"200%",
    }, 1000)

    setTimeout( () => {
      $(".autor__text:nth-child(3)")
      .css({
        marginLeft: "-350%",
        display: "flex",
      })

      $(".autor__text:nth-child(2)")
      .css({
        marginLeft: "-450%",
        display: "flex",
      })

    }, 400)
  })

  $("#autor__back").on("click", () => {
    $("html").css({
      overflow: "auto",
    })
    $(".autor__pic").css({display: "none"})
    $(".autor_display")
    .removeClass("showin")
    .addClass("animation")
    setTimeout( () => {
        $(".autor_display")
        .css({
          display: "none",
        })
        $(".autor__text")
        .css({
          display: "none",
          marginLeft: "-350%"
        })

        $(".autor__pic")
        .css({
          marginLeft: "0",
          display: "flex",
        })
    }, 500)

    $(".autor__text:nth-child(3)")
    .css({
      marginLeft: "-300%",
    })

    $(".autor__text:nth-child(2)")
    .css({
      marginLeft: "-450%",
    })


  })



})
