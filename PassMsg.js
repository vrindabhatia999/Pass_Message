document.body.style.backgroundColor='#d291bc';

var send=document.getElementById('send');
var message=document.getElementById('message');
var text=document.getElementById('text');
    
var clear=document.getElementById('clear');

var d1=document.querySelector('.d1');
d1.style.backgroundColor='white';
message.style.backgroundColor="#fec8d8";
//event listeners
send.addEventListener('click',deliver);


function deliver(){
    
    let txt=text.value;

    message.innerHTML=txt;
}

clear.addEventListener('click',clearfield);

function clearfield(){

    message.innerHTML=" ";

    text.value=" ";
}

//custom message generator
var btn=document.createElement('button');
btn.innerHTML="Generate custom message";
var d1=document.createElement('div');

document.body.appendChild(btn);
document.body.appendChild(d1);

d1.innerHTML="Your Custom msg";


const msgs=[ "I will get back to you soon.",
              "I am in a meeting.",
              "Call me as soon as possible.",
              "Hi there, hope you are in best of your health",
              "Attend your class today, i will be back soon",
              "Going to the gym",
              "Be ready for the movie at 6",
              "Bread and Jam are in the fridge",
              "Going to lunch @ 2pm",
              "Hope you got my email",
              "Make dinner for dad he will be back by 8pm",
              "Take the dog for a walk at 9",
              "Happy to see you back",
              "Text me the time of your flight",
              "Let me know when mom would be back",
              "Are you free tommorrow??",
              "Are you free in the afternoon"

];

btn.addEventListener("click",generateM);

function generateM(){

    var a1=msgs[Math.floor(Math.random()*msgs.length)];
    d1.innerHTML=a1;


}


//styling
btn.style.backgroundColor='#b19cd9';
btn .style.marginLeft='30%';
btn.style.marginTop='3%';
btn .style.fontSize='19px';
btn.style.fontFamily='monospace';


d1.style.textAlign='center';
d1.style.marginLeft='25%';
d1.style.marginRight='25%';
d1.style.marginTop='2%';
d1.style.fontSize='20px';
d1.style.fontStyle='italic';
d1.style.fontWeight='bold';
d1.style.height='50px';
d1.style.backgroundColor='#ffdfd3';

d1.style.border='2px solid pink';