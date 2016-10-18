$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("img").toggle().fadeToggle();
  });
});
$(document).ready(function() {
  $(".cat").click(function() {
    $("#pirate").toggle();
    $("#pirate-showing").toggle();
    $("img").toggle().fadeToggle();
  });
});
