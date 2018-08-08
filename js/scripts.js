
console.log("1");
$(document).ready(function(){
  console.log("2");
  $("form#numbers").submit(function(event){
    console.log("3");
    event.preventDefault();
    var name = $("#person1").val();
    var dob = $("#born").val();
    var beverage = $("#beverage").val();

    var flavor = $("input:radio[name=flavor]:checked").val();
    var favoriteColor = $("#color").val();

    $("#congrats").text(name + " " + dob + beverage + flavor + favoriteColor);
  });
});
