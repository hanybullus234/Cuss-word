let gameName = "Guess The Word";
document.titel = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By Hany Bullus Web`;
//*/***********************************0*/
let numbersOFTries = 8;
let numbersOFLetters = 6;
let currentTry = 1;
let numberOFHints = 2;
//***************************************************/
let wordToGuess = " ";
const words = ["create","update","delete","master","branch","mainly","elzero","hani"];
wordToGuess = words [Math.floor(Math.random() * words.length)].toLowerCase();

let = messageArea = document.querySelector(".message");

document.querySelector(".hint span").innerHTML = numberOFHints;
const getHintButton = document.querySelector(".hint");
getHintButton.addEventListener("click", getHint);

function generatelnput(){
    const inputsContainer = document.querySelector(".inputs");
    //******************************/
    for (let i = 1; i <= numbersOFTries; i++){
       const tryDiv = document.createElement("div");
       tryDiv.classList.add(`try-${i}`);
       tryDiv.innerHTML = `<span>Try ${i}</span>`;
       if(i !== 1) tryDiv.classList.add("disabled-inputs");
//**********************************/

       for (let j = 1; j <= numbersOFLetters; j++) {
        const input = document.createElement("input");
        input.type = "text";
        input.id =`guess-${i}-letter-${j}`;
        input.setAttribute("maxlength", "1");
        tryDiv.appendChild(input);
       }
       inputsContainer.appendChild(tryDiv);
    }
    inputsContainer.children[0].children[1].focus();
    //******************************/
    const inputslnDisabledDiv = document.querySelectorAll(".disabled-inputs input");
    inputslnDisabledDiv.forEach(input => (input.disabled = true));

    const inputs =document.querySelectorAll("input");
    inputs.forEach((input,index)=>{ 
         input.addEventListener("keyup",function(){
            this.value = this.value.toUpperCase();
            //console.log(index);
    const nextlnput = inputs[index + 1];
    if(nextlnput) nextlnput.focus();
     });
   
          input.addEventListener("keydown",function(event){
            //console.log(event);
            const currentIndex = Array.from(input).indexOf(event.target);
            //console.log(currentlndex);
            if(event.key === "ArrowLeft"){
              const prevInput =currentIndex-1;
              if (prevInput >= 0) inputs[prevInput].focus();

            }
            
          });
            
    });
};
const guessButton = document.querySelector(".check");
guessButton.addEventListener("click", handelGuess);
console.log(wordToGuess);

function handelGuess(){
  let successGuess = true;
  console.log(wordToGuess);
  for (let i = 1; i <= numbersOFLetters; i++){
    const inputField= document.querySelector(`#guess-${currentTry}-letter-${i}`);
    const letter = inputField.value.toLowerCase();
const actualLetter = wordToGuess[i - 1];

if(letter === actualLetter){
  inputField.classList.add("yes-in-place");
}
else if(wordToGuess.includes(letter) && letter !== ""){
  inputField.classList.add("not-in-place");
  successGuess = false;
 
}
else{
  inputField.classList.add("no");
  successGuess = false;
}
  }
  if(successGuess){
 messageArea.innerHTML=`YOU win After <span>${wordToGuess}</span>`;
 if(numberOFHints === 2){
  messageArea.innerHTML = "<p>congratz you didn't use hints</p>";
 }
 //*****************/


let allTries=document.querySelectorAll(".inputs > div");
  allTries.forEach((tryDiv) => tryDiv.classList.add("disabled-inputs"));
   //**************************************/

 guessButton.disabled = true; 
 getHintButton.disabled = true;


  }
  else{
    document.querySelector(`.try-${currentTry}`).classList.add("disabled-inputs");
    const currentTrylnputs = document.querySelectorAll(`.try-${currentTry} input`);
    currentTrylnputs.forEach((input) => (input.disabled = true));


currentTry++;
const nextTrylnput = document.querySelectorAll(`.try-${currentTry} input`);
nextTrylnput.forEach((input) => (input.disabled = false));


  let el = document.querySelector(`.try-${currentTry}`);
  if (el) {
         document.querySelector(`.try-${currentTry}`).classList.remove("disabled-inputs");
         el.children[1].focus();
  }
  else{
    guessButton.disabled = true;
    getHintButton.disabled = true;
    messageArea.innerHTML = `Game Over. The word was <span>${wordToGuess}</span>`;
    }
  }
}
function getHint()
{
  if(numberOFHints>0){
    numberOFHints--;
    document.querySelector(".hint span").innerHTML = numberOFHints;
  
  }
  if (numberOFHints === 0){
    getHintButton.disabled = true;
  }
  const enabledInputs = document.querySelectorAll("input:not([disabled])");
 // console.log(enabledInputs);
 const emptyEnabledInputs = Array.from(enabledInputs).filter((input) => input.value === "");
  console.log(emptyEnabledInputs);
  if(emptyEnabledInputs.length > 0){
const randomIndex = Math.floor(Math.random() * emptyEnabledInputs.length);
const randomIndet = emptyEnabledInputs[randomIndex];
const indexToFill = Array.from(emptyEnabledInputs).indexOf(randomIndet);

//console.log(randomIndex);
//console.log(randomIndet);
//console.log(indexToFill);
if (indexToFill !== -1){
  randomIndet.value = wordToGuess [indexToFill].toUpperCase();
}


  }
}
function handelBackspace(event){
if(event.key === "Backspace"){
  const inputs = document.querySelectorAll("input:not([disabled])");
  const currentIndex = Array.from(inputs).indexOf(document.activeElement);
 // console.log(currentIndex);
  if(currentIndex > 0){
    const currentInput = inputs[currentIndex];
    const prevIndex = inputs[currentIndex - 1];
    currentInput.value = "";
    prevIndex.value ="";
    prevIndex.focus();
  }
}
}
document.addEventListener("keydown",handelBackspace);

window.onload = function () {
    generatelnput();
};
window.onload = function () {
  generatelnput();
  
  // عرض الكلمة لمدة 4 ثوانٍ
  const wordDisplay = document.querySelector(".word-to-guess");
  wordDisplay.innerHTML = `The word is: <span>${wordToGuess.toUpperCase()}</span>`;
  wordDisplay.style.textAlign = "center";
  wordDisplay.style.fontSize = "24px";
  wordDisplay.style.fontWeight = "bold";
  wordDisplay.style.marginBottom = "20px";

  setTimeout(() => {
      wordDisplay.innerHTML = ""; // مسح الكلمة بعد 4 ثوانٍ
  }, 10000);
};
