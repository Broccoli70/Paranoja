$(function(){


  $(window).on("scroll", () => {

    let scroll =  $(document).scrollTop();
    let picHeight = $(".pic").height()/8 ;

    for (var i = 1; i < 8; i++) {


        if( scroll >= picHeight*i ){
          if(i == 1) {
            $(".pic").css({
              filter: "blur(" + i + "px)",
            })
          } else {
            $(".pic").css({
              filter: "blur(" + i*2.25 + "px)",
            })
          }
        }
        

    }


  })





})
