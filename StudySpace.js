//adding miuntes and seconds following Pomodoro cycles

//timer variables
var minutes = 25;
var seconds = "00"; 

//audio variables
var bell = new Audio("CuteBellSound.mp3");
var twinkle = new Audio("TwinkleSound.mp3");


function app() {
    template();
    navigationSlide();
}

function template(){
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

//navigation bar
const navigationSlide = () => {
    //getting burger and slider
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle navigation 
    //when we click burger nav-links will get the class nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        //Animation links pop up
         navLinks.forEach((link, index) => { 
            if(link.style.animation){
             link.style.animation = "";
            }
        
             else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }

        
        });

    });

    
}


//Tasks list:

//selectors
const todoInput = document.querySelector(".ToDo-Input");
const todoButton = document.querySelector(".ToDo-Button");
const todoList = document.querySelector(".ToDo-List");

//Event Listners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener('click', deleteCheck);



//Functions

/*adding ToDo list*/
function addToDo(event) {
    event.preventDefault(); //prevnets from submitting

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("ToDo");
    //Create LI
    const newtodo = document.createElement("li");
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('ToDo-Item');
    todoDiv.appendChild(newtodo);

    //Buttons
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>' //can add like this or use create element 
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>' //can add like this or use create element 
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to do list 
    todoList.appendChild(todoDiv);

    //Clear to do input value once inputed
    todoInput.value = " ";
}


function deleteCheck(e) {

    const itemClicked = e.target;

    //deleting to do 
    if (itemClicked.classList[0] === 'trash-btn') {
        const ToDo = itemClicked.parentElement;
        //animation
        ToDo.classList.add("fall");
        // ToDo.remove();
        ToDo.addEventListener("transitionend", function() {
            ToDo.remove();
        });

    }

    //Check mark
    if (itemClicked.classList[0] === "complete-btn") {
        const ToDo = itemClicked.parentElement;
        ToDo.classList.toggle("completed");
    }

}