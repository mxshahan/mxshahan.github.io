$('.owl-carousel').owlCarousel({
    items:1,
    margin:50,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    smartSpeed:450,
    loop:true,
    
});

//Animation
new WOW().init();

//FAQ
$(document).ready(function(){
    $('.collapsible').collapsible();
});

//NAVBAR
(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

