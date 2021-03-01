
let Xpos=0,Xv=0,Ypos=0,Yv=0,Stop=false;
var SpeechRec = new p5.SpeechRec();
SpeechRec.continuous = true;
SpeechRec.interimResult=true;
function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
  background(255);
  SpeechRec.start();
  SpeechRec.onResult = showResult; 
}
function draw() {
  
 
}
function showResult() {
 console.log(SpeechRec.resultString);
  switch(SpeechRec.resultString){
    case "open mail":
    window.open("https://mail.google.com");
      break;
       case "open YouTube":
window.open("https://www.youtube.com/");
      break;
       case "open Google":
     window.open("https://www.google.com/");
      break;
   case "open Play Store":
     window.open("https://play.google.com/");
      break;
       case "open WhatsApp":
     window.open("https://web.whatsapp.com/");
      break;
      case SpeechRec.resultString:
window.open("https://en.wikipedia.org/wiki/"+SpeechRec.resultString);
      break; 
     
  }
}