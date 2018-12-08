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
    $(".autor_display").addClass("showin")
    $(".autor_display")
    .css({
      display: "grid",
    })
    $(".autor__text")
    .delay(600)
    .animate({
      opacity: 1,
    }, 100)
    .animate({
      marginLeft: "300%",
    }, 2000, ()=> {
      $(".autor__text").css({display: "none",})
    })

    $(".autor__pic")
    .delay(1800)
    .animate({
      marginLeft:"200%",
    }, 1500)



  })



})
