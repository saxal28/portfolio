$(document).ready(function() {
  $(".portfolio").hide();
  $(".contact").hide();
  $(".introduction").hide();

  $("#Bio").click(function() {
    $(".introduction").slideDown();
    $('html, body').animate({
      scrollTop: $("#intro").offset().top
    }, 2000);
  });
  $("#Portfolio").click(function() {
    $(".portfolio").slideDown();
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 2000);
  });
  $("#Contact").click(function() {
    $(".contact").slideDown();
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 2000);
  });
  $("#Home").click(function() {
    $(".portfolio").hide();
    $(".contact").hide();
    $(".introduction").hide();
    $(".title").slideDown();
    $('html, body').animate({
      scrollTop: $("#title").offset().top
    }, 2000);
  });

});
