$(function() {

  var potato = false;
  var pizza = false;
  var pasta = false;
  var salad = false;

  $("#potato").click(function() {
    potato = true;
    pizza = false;
    pasta = false;
    salad = false;
  });
    $("#pizza").click(function() {
      potato = false;
      pizza = true;
      pasta = false;
      salad = false;
  });
    $("#pasta").click(function() {
      potato = false;
      pizza = false;
      pasta = true;
      salad = false;
  });
    $("#salad").click(function() {
      potato = false;
      pizza = false;
      pasta = false;
      salad = true;
    });


  $("form#hungry-buttons").submit(function(event) {
    console.log(potato);
    console.log(pizza);
    console.log(pasta);
    console.log(salad);
    if (potato === true) {
      $("#potato-result").show();
    }
    else if (pizza === true) {
      $("#pizza-result").show();
    }
    else if (pasta === true) {
      $("#pasta-result").show();
    }
    else if (salad === true) {
      $("#salad-result").show();
    }

    event.preventDefault();
  });
});
