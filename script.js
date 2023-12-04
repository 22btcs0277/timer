// console.log("hello")
let hr = 0;
let min = 0 ;
let sec = 0 ;
let count = 0;
let time = false;
function start(){
    time = true;
    timer();
}

function stop(){
    time = false;
}

function reset(){
    console.log("hel00")
    time = false;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("mini").innerHTML = "00";
    document.getElementById("sc").innerHTML = "00";
    document.getElementById("milli").innerHTML = "00";
     hr = 0;
     min = 0 ;
     sec = 0 ;
     count = 0;


}

function timer(){
    if(time==true){
        // for(let i = 0;i<=100;i++){

            count = count+1;
            if(count == 100){
                sec = sec + 1;
                count = 0;
                document.getElementById("sc").innerHTML = sec;
            }
            if(sec==60){
                min = min+1;
                sec = 0;
                document.getElementById("mini").innerHTML =min;
            }
            if(min == 60){
                hr = hr +1;
                min = 0;
                document.getElementById("hr").innerHTML= hr;
            }

       document.getElementById("milli").innerHTML = count;
        

        setTimeout("timer()",10)
    }

    // setTimeout(timer(),100)
    
}