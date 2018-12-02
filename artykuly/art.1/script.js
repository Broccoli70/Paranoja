$(function(){


  $(window).on("scroll", () => {

    let scroll =  $(document).scrollTop();
    let picHeight = $(".pic").height()/8 ;

    for (var i = 1; i < 8; i++) {

        if( scroll >= picHeight*i ){

          $(".pic").css({
            filter: "blur(" + i + "px)",
          })
        }
    }


  })





})
