$(document).ready(function(){
    $(".greeting-button").click(function(){         //Toggle when click class = greeting-button
        $(".display-text").text($(this).val());     //Change Text in element by button value
    });
  });