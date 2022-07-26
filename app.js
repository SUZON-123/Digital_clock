/*======================================================================
Project Requirments
Write A Pogram That Create A Disgital clock With Standard Formate
=========================================================================*/
/*
STEPS :
1.DOM Seclection
2.Creat Necessary Functon Methode 
*/

//STEP : 1 -- DOM Seclection
const time = document.getElementById("time");
const formatTime =document.getElementById("formate");



// STEP : 2 -- Creat Necessary Functon Methode 
function digitalClick(){
    let date = new Date();
    let hourese = date.getHours();
    let minutest = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormate = "AM";
  
    if(hourese == 0){
        hourese = 12;
    }
    if(hourese > 12){
        hourese = hourese - 12;
        timeFormate  = 'PM';
    }
    formatTime.innerHTML = timeFormate;
    hourese = hourese < 10 ? '0' + hourese : hourese;
    minutest = minutest < 10 ? '0' + minutest : minutest;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let fullTime = `${hourese}:${minutest}:${seconds}`;
    time.innerHTML = fullTime;

    

    setInterval(digitalClick,1000);

}

    digitalClick()

