$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipcodeInput = $("input#zipcode").val();
    var cardInput = $("input#card").val();

    
    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);
    $(".card").text(cardInput);

    $("#receipt").show();

    event.preventDefault();
  })
})
