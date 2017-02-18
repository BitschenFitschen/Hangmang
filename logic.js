var wordList = [ 
"OutlawStar",
"Pokemon",
"SpaceDandy",
"DragonBallz",
"Fullmetal",
]

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 9;

function startGame(){

wrongGuesses = [];
numGuesses = 9;
blanksAndSuccesses = [];


chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;


for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");
}

document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;
}



function checkLetters(letter) {

    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;
        }
    }

    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(chosenWord[i] === letter){
            blanksAndSuccesses[i] = letter;
        }
    }

    }else{
        numGuesses --;
        wrongGuesses.push(letter)
 	   }
	}


function roundComplete(){
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");


    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++;
        alert("You win!!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("you don't have any more guesses");        
        startGame();
    }
}


startGame();
document.onkeyup = function(event) {
   
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
    checkLetters(letterGuessed)
    roundComplete();

}
