

(function ($) {
    "use strict";
    
    var $menu = $('.dropdown-dots');
  
  $(document).mouseup(function (e) {
     if (!$menu.is(e.target) 
     && $menu.has(e.target).length === 0) 
     {
       $menu.removeClass('is-active');
    }
   });
  
  $('.toggle-dropdown').click(function () {
    $menu.toggleClass('is-active');
  });
  
  
   

  }(jQuery));