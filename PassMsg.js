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

