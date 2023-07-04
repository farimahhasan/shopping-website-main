$(document).ready(function () {
/*
    $('li').hover(function () {
   $(this).find('.submeno').stop(true,true).removeClass("d-none").fadeIn(.3);
   } , function () {
   $(this).find('.submeno').stop(true,true).fadeOut(.3);
      });
      
    $(window).resize(function(){
      var width= $(this).width();
      if(width<1180){
        $("#collogo").removeClass("col-md-8").addClass("col-12")
      }
      else{
         $("#collogo").removeClass("col-12").addClass("col-md-8")

      }

     });
*/
     var isopen=false;
     $("#icon-meno-mobile").click(function(){

        if(!isopen){
          $('.icon-open-meno').removeClass('d-inline-block').addClass('d-none');
          $('.icon-close-meno').removeClass('d-none').addClass('d-inline-block');
          $('.meno-mobile').removeClass('d-none').addClass('animation-meno-mobile-open');
          isopen=true;
        }

        else{
          $('.icon-close-meno').removeClass('d-inline-block').addClass('d-none');
          $('.icon-open-meno').removeClass('d-none').addClass('d-inline-block');
          $('.meno-mobile').addClass('d-none');
          isopen=false;
        }
     });
     $(".col-product-filter-size").click(function(){
        $(this).addClass('bg-dark').addClass('text-white');
        $(this).click(function(){
          $(this).removeClass('bg-dark').removeClass('text-white');
        });
     });

     $(".row-container-size-details>div").click(function(){
      $(this).addClass('bg-dark').addClass('text-white');
      $(this).click(function(){
        $(this).removeClass('bg-dark').removeClass('text-white');
      });
   });
     
/* 
      $('.div-container-mobile').click(function(){
        $(this).find('div').fadeToggle(1);
      });
       $('#div-container-mobile-home').click(function(){
        $('#div-mobile-template').fadeOut(1);
       });
       $('#div-container-mobile-template').click(function(){
        $('#div-mobile-home').fadeOut(1);
       });
 


  main jquery 
  
  */
  $(window).scroll(function () {
    var offset = $('html,body').scrollTop();
    $('.jump-button').fadeIn().removeClass('d-none');
    if (offset === 0) {
        $('.jump-button').fadeOut();
    }
});
$('.jump-button').click(function () {

    $('html,body').animate({ scrollTop: 0 }, 700);
});


  });
