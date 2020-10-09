// MENU FIXO NAS PÁGINAS INTERNA
jQuery(document).ready(function ($) {
  var entreiAnimateNumber = 0;
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
     if (scroll < 450){
         $("header .logo img").css("width","90%");
     }
     if (scroll > 450){
         $("header .logo img").css("width","48%");
     }
  });
});