
var wordList = ["Aces Remington Winchester Horse Carriage PonyExpress Duel JohnWayne Hangman Sheriff Stirrups Boots GiddyUp Lasso Ranch Rodeo Howdy Buckaroo Saddle Yeehaw WildWest Branded", ];

var randomWord = wordList.split(' ');

var randSelect = wordList[Math.floor(Math.random() * wordList.length-1)];

var guessWord = wordList[randSelect];

var lettersGuessed = {};

var correctGuesses = 0;

var numGuesses = 15;


var winner = '<div class="endGame">'+
  '<h1>You Win!</h1>' +
  '<button type="button" class="btn btn-primary">Play Again</button>'+
  '</div>';

var loser = '<div class="endGame">' +
    '<h1>You Lose...</h1>' +
    '<button type="button" class="btn btn-danger">Play Again</button>' +
  '</div>';

var gameHasEnded = false;


var correctLetters = guessWord.split('').map(function(chars){
    return "<h3>"+chars+"</h3>";
});
$('.correctLetters').append(correctLetters);


function reloadEvent(){
   $('.endGame button').click(function(){
     location.reload(true);
  });
}


if (!gameHasEnded) {
$(window).keypress(function(e) {
  var key = String.fromCharCode(e.which);
    if (e.which < 97 || e.which > 122) {
        return alert("You typed " + key + " . Choose a letter.");
    }
   if (/[a-z]/.test(key)) {
      if (lettersGuessed.hasOwnProperty(key)) {
        return alert("Already chosen. Choose a different letter.");
      }
      else{

        lettersGuessed[key] = key;

        //if not pressed, add charGuessed class
          $('.letters').each(function(x){
            if ($(this).html().toLowerCase() === key) {
              $(this).addClass('charGuessed');
            }

          });
      }

        //Case that letter is contained in safeWord
        var inWord = false;
        $('.correctLetters h3').each(function(x){
          if ($(this).html() === key) {
            inWord = true;
            $(this).css('color','red');
          }
        });

        //When not contained in safeWord
        if (inWord === false) {
          $('#guesses-left').html('Guesses Left: '+ numGuesses.length);

          //Show incorrect number of choices
          $('#incorrects').html('Wrong Letters: '+ (15-numGuesses.length));

          //If the array is empty, signal game over
          if (numGuesses.length === 0) {
            gameOver = true;
            $('body').contents().fadeOut(2000);
            $('body').append(loser).fadeIn(4000);
          }
          reloadEvent();
        }

        //Action upon victory
        if (lettersGuessed === guessWord.length) {
          gameOver = true;
          $('body').contents().fadeOut(2000);
          $('body').append(winner).fadeIn(4000);
          reloadEvent();
        }

    } 

});
}



/*
var wordLetters = [];
var blanks = 0;
var correctGuesses = [];
var incorrects = [];


randomWord = wordList[Math.floor(Math.random() * wordList.length)];
wordLetters = randomWord.split("");
blanks = wordLetters.length;

var wins = 0;
var losses = 0;
var numGuesses = 15;


function startGame () {

incorrects = [];
numGuesses = 15;
correctGuesses = [];



    for (var i = 0; i < blanks; i++) {
        correctGuesses.push("_");
    }

document.getElementById("word-blank").innerHTML = randomWord;
document.getElementById("word-blank").innerHTML = correctGuesses.join(" ");
document.getElementById("guesses-left").innerHTML = numGuesses

};

*/

/*
function guessChecker (letter) {

var letterInWord = false;

for (var i = 0; i < blanks; i++) {
    if (randomWord[i] === letter) {
        letterInWord[i] = true;
    }
}

if (letterInWord) {
    for(i = 0; i < blanks; i++) {
        if(wordLetters[i] === letter) {
        correctGuesses[i] = letter;
        }
    }
} else {
    numGuesses; --;
    incorrects.push(letter)
}
};




function newRound() {
    document.getElementById('word-blank').innerHTML = correctGuesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('incorrects').innerHTML = incorrects.join(" ");

    console.log(wordLetterss);
    console.log(correctGuesses);
    if (wordLetters.join(" ") === correctGuesses.join(" ")) {
        wins++;
        alert("You win!!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    } else if (numGuesses === 0) {
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("No Guesses Left, Pardner!");        
        startGame();
    }
};



startGame();
document.onkeyup = function(event) {
    if (event = )
    var checkLetters = String.fromCharCode(guessChecker.keyCode).toLowerCase();
    checkLetters(guessChecker);
    roundComplete();
};



/*.  TESTING EXTRA CODE DOWN HERE 


function letterChecker() {
    var randomWord = "The rain in SPAIN stays mainly in the plain"; 
    var res = randomWord.match(/ain/g);
    document.getElementById("demo").innerHTML = res;
}


function blankReplace() {
    var blanks = document.getElementById("word-blank").innerHTML; 
    var correctGuesses = str.replace(function );
    document.getElementById("demo").innerHTML = userG;
}

function myFunction() {
    var randomWord = document.getElementById("word-guess").innerHTML; 
    var res = randomWord.replace(function correctGuesses(){return correctGuesses.toLowerCase();});
    document.getElementById("demo").innerHTML = res;
}
*/
/*
for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
      };

      $(".letter-button").on("click", function () {
        var fridgeMagnet = $("<div>");
        fridgeMagnet.addClass("letter fridge-color")
        fridgeMagnet.text($(this).attr("data-letter"));
        $("#display").append(fridgeMagnet);
      });

      $("#clear").on("click", function() {
        $("#display").empty();
      })
*/
