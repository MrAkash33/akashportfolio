$(document).ready(function () {
  $(".navigate_bar").click(function () {
    $(".ham-menu").animate({
      width: "toggle",
    });
  });
   var words = [
       "Mobile App ",
       "Ui/UX",
       "Wordpress",
       "Angular",
       "Graphic",
       "React",
     ],
     i = 0;
   setInterval(function () {
     $("#changingword").fadeOut(function () {
       $(this)
         .html(words[(i = (i + 1) % words.length)])
         .fadeIn();
     });
   }, 3000);
});
$(document).ready(function () {
  $(".menu li a").click(function () {
    $(".menu li a").removeClass("activeak");
    $(this).addClass("activeak");
  });
});
  
