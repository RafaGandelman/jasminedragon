//global constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const patternSize = 10;
const leaves = [5,5,1,2,5,5,1,2,2,2,1,2,3,4,2,2,3,4];

//global variables
var pattern = new Array(patternSize);
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime=1000;
var mistakes = 0;

//When start is pressed
function startGame(){ 
    //initialize game variables
    //creates a random pattern every time
    for(var i=0;i<patternSize;i++){
      pattern[i]=(Math.floor(Math.random()*5)+1);
    }
    progress = 0;
    mistakes = 0;
    clueHoldTime=1000;
    gamePlaying = true;
    document.getElementById("butStart").classList.add("hidden"); //hide start button
    document.getElementById("leaves").classList.add("hidden");// hide leaves button
    document.getElementById("butEnd").classList.remove("hidden"); //show stop button
    playClueSequence();
}

//When Leves from the Vine is presed
function leafGame(){ 
    //initialize game variables
    //FSet the basic mellody of the song as the pattern
    for(var i=0;i<patternSize;i++){
      pattern[i]=leaves[i];
    }
    progress = 0;
    mistakes = 0;
    clueHoldTime=1000;
    gamePlaying = true;
    document.getElementById("butStart").classList.add("hidden"); //hide start button
    document.getElementById("leaves").classList.add("hidden");// hide leaves button
    document.getElementById("butEnd").classList.remove("hidden"); //show stop button
    playClueSequence();
}

//When stop is pressed
function stopGame(){ 
  gamePlaying=false;
  document.getElementById("butStart").classList.remove("hidden");//show start button
  document.getElementById("leaves").classList.remove("hidden"); //hide leaves button
  document.getElementById("butEnd").classList.add("hidden"); //hide stop buttom
}

//Not my code, coppied from assignment
//Make buttons "light up"
function lightButton(btn){ 
  document.getElementById("but"+btn).classList.add("lit")
}

//Buttons return to neutral color
function clearButton(btn){ 
  document.getElementById("but"+btn).classList.remove("lit")
}

//Makes the next button on the pattern light up
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//Play the clues for this "level"
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime = clueHoldTime-(Math.floor(1000/(patternSize*2)));//Decrese the time for the clue for each "level" 
}

//When three or more mistakes are made
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

//When the pattern finishes
function wonGame(){
  stopGame();
  alert("Game Over. You won!");
}

//When a button is pressed during the game
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){ //checks to see if the game is running
    return;
  }
  //My code
  if(btn!=pattern[guessCounter]){ //Wrong button press, one mistake is made
    if(mistakes<2){
      mistakes++;
      
    }
    else{ //Three mistakes were made
      loseGame();
      return;
    }
  }
  else{ //Corect button press
    if(guessCounter==progress){ //Last button for this level
      if(progress==patternSize-1){ //Last level
        wonGame(); 
        return;
      }
    progress++; //Not the last level
    playClueSequence();
    return;        
    }
    guessCounter++; //Not the last button for this level
    return;
  }
  return;
}


// Sound Synthesis Functions
//Table used to store the frequencies of each button
const freqMap = {
  5: 293.66, //Frequency of D4 string
  1: 261.63, //Frequency of C4 string
  2: 246.94, //Frequency of B3 string
  3: 220.00, //Frequency of A3 string
  4: 196.00  //Frequency of G3 string
} //Fun fact: these notes are the ones for Leaves from the Vine from Avatar: The Last Airbender

//Plays the sound of specific button
function playTone(btn,len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

//Makes the sound of specific button play
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

//Makes any sound that is playing stop
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
