$(document).ready(function() {
  var num = Math.floor((Math.random() * 100) + 1);
  var guesses = 0;

  $( ".submit" ).on( "click", function() {
    var userGuess = parseInt($( "#guess" ).val());
    if ( userGuess && userGuess >= 0 && userGuess <= 100 ) {
      guesses += 1;
      if (  userGuess === num ) {
        $( ".submit" ).toggleClass( "hidden" )
        $( ".replay" ).toggleClass( "hidden" )
        document.getElementById("guess").disabled = true;
        alert( "Congratulations, you've guessed the number in " + guesses + " guesses!" );
      } else {
        if ( userGuess > num ) {
          alert( userGuess + " was too high, try again..." );
        } else {
          alert( userGuess + " was too low, try again..." );
        }
      }
    } else {
      alert( "Invalid input, must enter a number between 0 and 100." );
    }
  });

  $( ".replay" ).on( "click", function() {
    location.reload();
  });

})
