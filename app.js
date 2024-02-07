var hours = 0;
var mins = 0;
var second = 0;
var millisecond = 0;

function renderTime() {
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML =  second;
    document.getElementById("milli").innerHTML = millisecond;
    
}

function startTimer() {
    interval = setInterval(() => {
       renderTime() 
        
       millisecond++

       if(millisecond == 10){       
       millisecond = 0
     second++

    }
     if(second == 60){
        second = 0
        mins++
     }

     if(mins == 60){
        mins = 0
        hours++
     }

    }, 100);
    
}


  function stopTimer() {
    clearInterval(interval)
    
  }

  function resetTimer() {
    stopTimer()

     hours = 0;
 mins = 0;
 second = 0;
 millisecond = 0;

 document.getElementById("sec").innerHTML = second
 document.getElementById("mins").innerHTML = mins
 document.getElementById("milli").innerHTML = millisecond
 document.getElementById("hours").innerHTML = hours

  }