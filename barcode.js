//function barcodeCalculator()
//{
let randomArray = Array.from(
  {
    length: 12,
  },
  () => Math.floor(Math.random() * 10),
);

// barcode check digit calculation
let sum1 = randomArray[0]+randomArray[2]+randomArray[4]+randomArray[6]+randomArray[8]+randomArray[10]
let sum2 = randomArray[1]+randomArray[3]+randomArray[5]+randomArray[7]+randomArray[9]+randomArray[11]
let total1 = sum2 * 3
let total2 = total1 + sum1

randomArray[11] = randomArray[11] + "... Now calculate the final digit."

function roundUpNearest10(total2) {
  return Math.ceil(total2 / 10) * 10;
}

let result = roundUpNearest10(total2);
let result2 = result - total2
let resultSpoken = "It was " + result2 + "... Hit reset to go again."

randomArray.push(resultSpoken)
console.log(randomArray);

// counter and array stuff
let counter = -1;

function increment() {
  counter++;
  
  
  document.getElementById("counter").innerHTML = randomArray[counter];
}

// text to speech stuff
const textEL = document.getElementById('text');
const speakEL = document.getElementById('increment');

speakEL.addEventListener('click', speakText);
function speakText() {

    // stop any speaking in progress
    window.speechSynthesis.cancel();

    const text = randomArray[counter];
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
//}

function reloadThePage(){
    window.location.reload(true);
} 
