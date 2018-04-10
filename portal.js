$(document).ready(function () {
    $('window').scroll(function(){
      var CurrentScroll = 0;
      var NextScroll = $(this).scrollTop();
      if (NextScroll > CurrentScroll){
         $('.box').animate(
                { left: -100 }, {
                    duration: 'slow',
                    easing: 'easeOutBack'
                })
      }
      else {
          $('.box').animate(
                { left: 200 }, {
                    duration: 'slow',
                    easing: 'easeOutBack'
                })
      }
      CurrentScroll = NextScroll;  //Updates current scroll position
  });
});


