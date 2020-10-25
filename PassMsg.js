document.body.style.backgroundColor='coral';

var send=document.getElementById('send');
var message=document.getElementById('message');
var text=document.getElementById('text');
    
var clear=document.getElementById('clear');

var d1=document.querySelector('.d1');
d1.style.backgroundColor='white';
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
              "call me as soon as possible.",
              "Hi there, hope you are in best of your health"

];

btn.addEventListener("click",generateM);

function generateM(){

    var a1=msgs[Math.floor(Math.random()*msgs.length)];
    d1.innerHTML=a1;


}
btn.style.backgroundColor='red';
btn .style.marginLeft='30%';
btn.style.marginTop='3%';


// d1.style.textAlign='center';
d1.style.marginLeft='25%';
d1.style.marginRight='25%';
d1.style.marginTop='2%';
d1.style.fontSize='20px';
d1.style.fontStyle='italic';

d1.style.border='1px solid pink';