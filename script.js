$(document).ready(function() {
 

  $("p").text("Змінений текст");
  $("#task1").addClass("highlight");
  $("li").addClass("list-item");


  $(".highlight").css("color", "red");
  $(".list-item").css("color", "lightgrey");


  setInterval(function() {
    $(".highlight").fadeToggle(2000);
  }, 2000);


  $("#task1 p:last").text("Новий останній текст");


  var button = $("<button>Видалити елементи</button>");
  button.click(function() {
    $(".list-item").remove();
  });
  $("body").append(button);
});
