$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();

    var userInput = $("#whatever").val().toLowerCase();
    var noPunc = userInput.replace(/[^a-z0-9]/gi, '');
    var letters = noPunc.split('');

    console.log(checkLetters(letters));

  });
});
//BACKEND BELOW THIS LINE -------------------------
function checkLetters(array){
  var letters = array
  for (var i=0; i < letters.length; i++){
    var letter = letters[i]
    var end = letters[(letters.length -i-1)]
    console.log(letter + " --- " + end);

    if (letter !== end){
      return false
    }
  }

  return true
}
