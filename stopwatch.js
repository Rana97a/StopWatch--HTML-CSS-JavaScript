const time= document.querySelector('.watch .time');
const start_btn= document.getElementById('start');
const stop_btn= document.getElementById('stop');
const reset_btn=document.getElementById('reset');

let counter=0;
let interval=null; 

start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset); 


function timer(){
    counter++;

    let hours= Math.floor(counter/(60*60));
    let minutes= Math.floor(counter/60);
    let seconds= counter%60;

    if(hours<10) hour= '0'+hours;
    if(minutes<10) minutes='0'+minutes;
    if(seconds<10)seconds='0'+seconds;

   time.innerText=`${hours}:${minutes}:${seconds}`;
};

function start(){
    if(interval){
        return
    }

    interval=setInterval(timer, 1000);
}

function stop(){
   clearInterval(interval);
   interval= null;
}

function reset(){
    stop();
    counter=0;
    time.innerHTML='00:00:00';
}




