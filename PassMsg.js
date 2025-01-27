document.body.style.backgroundColor='#d291bc';
const send=document.getElementById('send');
var message=document.getElementById('message');
var text=document.getElementById('text');
    
var clear=document.getElementById('clear');

var d1=document.querySelector('.d1');
d1.style.backgroundColor='white';
message.style.backgroundColor="#fec8d8";
// d1.style.backgroundImage='url(message.svg)';
d1.classList.add('d1c');

var count=0;
var c1=document.createElement('div');
c1.innerHTML="Your message count will be shown here!"
document.body.appendChild(c1);

//styling c1
c1.style.marginLeft='31%';
c1.style.marginRight='27%';
c1.style.fontSize='19px';
c1.style.fontWeight='bold';
c1.style.backgroundColor='#ffdfd3';
c1.style.textAlign='center';
c1.style.marginTop='3%';


//variables
 var counter=true;


//event listeners
send.addEventListener('click',deliver);
clear.addEventListener('click',clearfield);


function deliver(){
if(counter){
    let txt=text.value;
    message.innerHTML=txt;
    count=count+1;
    if(count==5){
        counter=false;
        
    }
    c1.innerHTML="You have sent:"+" "+ count+" " +"messages";
}
else{
    send.disabled=true;
    alert("wait for 5 seconds,number of msgs sent exceeded(will appear only after 5 mesages and up):");
    setTimeout(() => {counter=true,send.disabled=false}, 6000);
}

}



function clearfield(){
    message.innerHTML=" ";
    text.value=" ";
}

//custom message generator
var btn=document.createElement('button');
btn.innerHTML="Send custom message";
var d1=document.createElement('div');
btn.style.textShadow='1px 1px 1px purple';

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
              "Are you free in the afternoon",
              "Goodafternoon, dont forget to check your mail",
              "You have an appontment fixed at 7pm"

];
btn.addEventListener("click",generateM);

//functions
function generateM(){
    var a1=msgs[Math.floor(Math.random()*msgs.length)];
    d1.innerHTML=a1;
    message.innerHTML=a1;
    count=count+1;
    c1.innerHTML="<strong>You have sent:</strong>"+" "+ count+" " +"<strong>messages</strong";

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

d1.style.border='2px dotted pink';