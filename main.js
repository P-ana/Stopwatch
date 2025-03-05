const display=document.getElementById("display");
let timer=null;//t is often used to indicate that a variable has no value or that an object does not exist.
let startTime=0;
let elapsedTime=0;//eeps track of the total time passed.
let isRuning=false;// A boolean flag to check if the stopwatch is running.

function start(){
if(!isRuning){// If the stopwatch is not running(stopwatch is stopped.)
startTime=Date.now()-elapsedTime;//returns the number of milliseconds elapsed since the epoch,AKO JE PAUZA DA KRENE OD TOG PROTEKLOG VREMENA
timer=setInterval(update,10);//calls update func every 10 seconds
isRuning=true;
}
}

function stop(){
if(isRuning){
    clearInterval(timer);//stops calling the update() function.
    elapsedTime=Date.now()-startTime;//stores the total time elapsed before stopping.
    isRuning=false;

}}

function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
     isRuning=false;
     display.textContent="00:00:00:00";
    

}

function update(){
const currentTime=Date.now();
elapsedTime=currentTime-startTime;// total time elapsed
let hours=Math.floor(elapsedTime/(1000*60*60));//Converts milliseconds to hours.
let minutes=Math.floor(elapsedTime/(1000*60)%60);//Converts milliseconds to min.
let seconds=Math.floor(elapsedTime/1000%60);//Converts milliseconds to sec.
let miliseconds=Math.floor(elapsedTime%1000 /10);// Gets milliseconds in 2-digit format.

hours=String(hours).padStart(2,'0');
minutes=String(minutes).padStart(2,'0');
seconds=String(seconds).padStart(2,'0');
miliseconds=String(miliseconds).padStart(2,'0');


display.textContent=`${hours}: ${minutes}: ${seconds}: ${miliseconds}`;
}