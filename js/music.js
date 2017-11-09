// jQuery hide()/show() example with a switch statement

$(document).ready(function() {


  // function to hide all divs
  function hideAll() {
    $('#sigo_audio').hide();
    $('#migente_audio').hide();
    $('#safari_audio').hide();
    $('#ginza_audio').hide();
  }

  // run that function right away
  hideAll();

  // when any animal is clicked, make the suitable div appear
  $('.cover').click(function() {

    // but first, hide all the divs to ensure that
    // only one will be open, ever
    hideAll();

    // here is a switch statement - this was in Codecademy
    // "Control Flow" lesson 7

    // we can get the ID of the thing that was clicked -
    switch ($(this).attr("id")) {
      case "sigo":
        $('#sigo_audio').show();
        break;
      case "migente":
        $('#migente_audio').show();
        break;
      case "safari":
        $('#safari_audio').show();
        break;
      case "ginza":
        $('#ginza_audio').show();
        break;
    }
  }); // end of function for clicking


});
