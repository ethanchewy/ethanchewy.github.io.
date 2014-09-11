var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    
    $('.photo').animate({
      left: "-2000px"
      
    }, 200);
  });
  
  /*Opens about section*/
  $('.pictures').click(function() {
   $('.menu').animate({
      left: "0px"
      
    }, 200);
    
    $('body').animate({
      left: "2000px"
    }, 200);

    $('.photo').animate({
      left: "512px"
    });
    
  });
  
  $('.facebook').click(function() {
    window.location.href="http://www.facebook.com/ethan.chiu.1420"; 
  });
  
  $('.linkedin').click(function() {
    window-location.href ="https://www.linkedin.com/pub/ethan-chiu/a2/718/846";
  })
  
};
$(document).ready(main);
