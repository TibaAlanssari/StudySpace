
function app() {
    
    navigationSlide();
}


//navigation
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


