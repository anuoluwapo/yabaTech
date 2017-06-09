$(document).ready(function () {
  $('.dropdown-button').dropdown({
    inDuration: 100,
    outDuration: 225,
    constrain_width: false,
    hover: true,
    gutter: 0,
    belowOrigin: true,
    alignment: 'left'
  });
});
$(document).ready(function(){
   // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
});
  $(document).ready(function () {
    $('.slider').slider({
      full_width: true,
      height: 540
    });
  });
  $(document).ready(function () {
    $('div.gallery .slider').slider({
      full_width: true,
      height: 376
    });
  });
  
  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
        // Student Portal
  $(document).ready(function(){
    $('h6.personalSetup').click(function(){
      $('ul.personalSetup').toggleClass('hide');
      // $('ul.personalSetup').next().siblings('ul').hide();
    });
   $('h6.mainmenu').click(function(){
     $('ul.mainmenu').toggleClass('hide');
    //  $('ul.mainmenu').next().siblings('ul').hide();
   });
   $('h6.others').click(function(){
     $('ul.others').toggleClass('hide');
    //  $('ul.others').next().siblings('ul').hide();
   });
   $('h6.e_vote').click(function(){
    //  $('ul.e_vote').toggleClass('hide')
     $('ul.e_vote').toggleClass('hide');
   })
  })
// $(document).ready(function(){
//   $('h6').click(function(){
//     $('ul.personalSetup').toggleClass();
//     $('ul.mainmenu').toggleClass();
//     $('ul.others').toggleClass();
//     $('ul.e_vote').toggleClass('hide')
//     // $(this).next().toggleClass('hide');
//     // $(this).next().siblings('ul').slideUp();
//   })
// })