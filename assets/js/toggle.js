

(function ($) {
    "use strict";
    
    var $menu = $('.dropdown-dots');
  
  $(document).mouseup(function (e) {
     if (!$menu.is(e.target) // if the target of the click isn't the container...
     && $menu.has(e.target).length === 0) // ... nor a descendant of the container
     {
       $menu.removeClass('is-active');
    }
   });
  
  $('.toggle-dropdown').click(function () {
    $menu.toggleClass('is-active');
  });
  
  
   

  }(jQuery));