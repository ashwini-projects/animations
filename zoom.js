 function animationHover(element, animation) {
   element = $(element);
   // element = document.getElementById(element);
   element.hover(
     function() {
       element.addClass('animated ' + animation);
     },
     function() {
       //wait for animation to finish before removing classes
       window.setTimeout(function() {
         element.removeClass('animated ' + animation);
       }, 2000);
     }
   );
 };

 function animationClick(element, animation) {
   element = $(element);
   element.click(
     function() {
       element.addClass('animated ' + animation);
     }
   );
 };

 function loadDetails1() {
   // after 20 ms, enable the big card, and animate it using zoomIn
   window.setTimeout(function() {
     $('#cards').removeClass("fadeIn fadeOutUp");
     $('#bigCard').removeClass("hide");
     $('#bigCard').addClass('animated zoomIn');
   }, 20);
   console.log("removing older cards");
   animationClick("#cards", "fadeOutUp");
   windows.setTimeout(function() {
     $('#big-card-body').addClass('big-card-body');
   }, 30);
   // animationClick("#cards", "fadeOutUp");
 }

 function restore1() {
   window.setTimeout(function() {
     $('#cards').removeClass("fadeOutUp");
     $('#cards').addClass('cards fadeIn');
     $('#bigCard').removeClass("animated zoomIn");
     $('#bigCard').addClass('hide');
   }, 20);
   animationClick("#bigCard", "fadeOutUp");
   // animationClick("#cards", "zoomInUp");
 }

 function zoom_in() {
   hideCard();
   showBigCard();
 }

 function zoom_out() {
   hideBigCard();
   showCard();
 }

 function hideCard() {
   animationClick("#cards", "fadeOutUp");
   // clean up old card
   window.setTimeout(function() {
     $('#cards').removeClass();
     $('#cards').addClass('cards hide');
   }, 200);
 }

 function showCard() {
   // restore the card
   // clean up old card
   window.setTimeout(function() {
     $('#cards').removeClass();
     $('#cards').addClass('cards ');
     // $('#cards').addClass('cards animated zoomlargeIn');
     animationClick("#cards", "zoomlargeIn");
   }, 200);
 }

 function hideBigCard() {
  animationClick('#bigCard', 'zoomOutDown');
   // $('#bigCard').addClass(' animated zoomOutDown');
   window.setTimeout(function() {
     $('#bigCard').removeClass();
     $('#bigCard').addClass('bigCard hide');
     $('#big-card-head').removeClass();
     $('#big-card-body').removeClass();
   }, 200);
 }

 function showBigCard() {
   $('#bigCard').removeClass('hide');
   $('#bigCard').addClass('bigCard animated zoomIn');
   window.setTimeout(function() {
       $('#big-card-body').addClass('big-card-body')
       $('#big-card-body').addClass(' animated slideInUp');
     $('#big-card-head').addClass('big-card-head');
   }, 50);
 }
