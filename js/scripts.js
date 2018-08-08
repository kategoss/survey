var add = function(n1, n2) {
return n1 + n2;
}

var subtract = function(n1, n2) {
return n1 - n2;
}

var multiply = function(n1, n2) {
return n1 * n2;
}

var divide = function(n1, n2) {
return n1 / n2;
}

$(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var n1 = parseInt($("#number1").val());
    var n2 = parseInt($("#number2").val());
    $("#addition").click(function(){
      var result = add(n1, n2);
      $("#output").text(result);

    });
    $("#subtraction").click(function(){
      var result = subtract(n1, n2);
      $("#output").text(result);
    });
    $("#multiplication").click(function(){
      var result = multiply(n1, n2);
      $("#output").text(result);
    });
    $("#division").click(function(){
      var result = divide(n1, n2);
      $("#output").text(result);
    });
  });
});
