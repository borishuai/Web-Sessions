$(function() {
  //control the menu function
  $("#toggle_menu").toggle(function() {
      $.deck('showMenu');
      $(this).text('Hide Menu');
    }, 
    function() {
      $.deck('hideMenu');
      $(this).text('Show Menu');
    }
  );
  
  $("#toggle_goto").toggle(function() {
      $.deck('showGoTo');
      $(this).text('Hide Goto');
    }, 
    function() {
      $.deck('hideGoTo');
      $(this).text('Show Goto');
    }
  );
  
  $('#first_page').click(function() {
    $.deck('go', 0);
  });
  
  $('#last_page').click(function() {
    var lastIndex = $.deck('getSlides').length - 1;
    $.deck('go', lastIndex);
  });
  
  $(window).keydown(function(event){console.log(1);
    //F2 pressed, hide the top bar
    if (113 === event.keyCode) {console.log(2);
      if ('none' === $('header').css('display')) {console.log(3);
        $('header').show();
        session.ui.refineSize();
      } else {console.log(4);
        $('header').hide();
        session.ui.fullPage();
      }
      
    }
  });
  
  session.ui.refineSize();
});
var session = {};
session.ui = {};
session.ui.refineSize = function() {
  var headerHeight = $('header').height();
  var bodyHeight = $('body').height();
  $('.deck-container').height(bodyHeight - headerHeight);
};

session.ui.fullPage = function() {
  $('.deck-container').height($('body').height());
};
