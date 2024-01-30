$(document).ready(function() {

    $(".custom-card").css({
      transform: "scale(0.5) rotate(-45deg)", 
      opacity: "0", 
      translateY: "-100px" 
    });

    $(".custom-card").animate(
      {
        opacity: 1, 
        translateY: "0px", 
        rotate: "20deg", 
        scale: 1 
      },
      {
        duration: 3000, 
        step: function(now, fx) {
          $(this).css("transform", "scale(" + now + ") rotate(-20deg)");
        },
        complete: function() {

            setTimeout(function() {
            $(".form-control").addClass("show-border");

            $(".btn-primary").addClass("show-button-animation");

            setTimeout(function() {
              $(".form-control").removeClass("show-border");
              $(".btn-primary").removeClass("show-button-animation");
            }, 1200); 
          }, 500); 
        }
      }
    );
});
