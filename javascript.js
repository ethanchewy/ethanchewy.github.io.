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
  });
  
  /*Opens about section*/
  $('.pictures').click(function() {
   $('.menu').animate({
      left: "0px"
      
    }, 200);
    
    $('body').animate({
      left: "-500px"
    }, 200);

    $('.photo').animate({
      left: "512px"
    }, 200);
    
    $('#photo > img').each(function(){
    //get img dimensions
    var h = $(this).height();
    var w = $(this).width();

    //get div dimensions
    var div_h =$('#photo').height();
    var div_w =$('#photo').width();

    //set img position
    this.style.top = Math.round((div_h - h) / 2) + 'px';
    this.style.left = '50%';
    this.style.marginLeft = Math.round(w/2) + 'px';
    });
  });
};
$(document).ready(main);
