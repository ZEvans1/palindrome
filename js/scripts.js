$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();

    var userInput = $("#whatever").val().toLowerCase();
    var noPunc = userInput.replace(/[^a-z0-9]/gi, '');
    //var alphanum = "abcdefghijklmnopqrstuvwxyz0987654321".split('')
    var letters = noPunc.split('');

    console.log(checkLetters(letters));

  });
});
//If we were to not use regex, we would use the following code:

// var alphanum = "abcdefghijklmnopqrstuvwxyz0987654321".split('')
// var array = []
//
// for (var i=0; i < userInput.length; i++) {
// 	var char = userInput[i]
//   if (alphanum.indexOf(char) !== -1){
//   	array.push(char)
//   }
// }

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
