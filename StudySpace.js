//adding miuntes and seconds following Pomodoro cycles

//timer variables
var minutes = 25;
var seconds = "00"; 

//audio variables
var bell = new Audio("CuteBellSound.mp3");
var twinkle = new Audio("TwinkleSound.mp3");


function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
    bell.play();

    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000); /*waits for one min until it goes to the func and executes*/ 
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer(){
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        if(seconds <= 0){
            if(minutes <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                twinkle.play();
                document.getElementById("complete").innerHTML = "Complete !";

                document.getElementById("complete").classList.add("show_message");
            }
            seconds = 60;
        }
    }

}