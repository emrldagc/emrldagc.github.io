const navBar = document.querySelector("nav");
const navBtn = document.getElementById("nav_btn");
const navMenu = document.getElementById("nav_menu");
let navScrollThreshold;
let navMenuVisible = false

function setupNav(){
    navBtn.style.top = navBar.clientHeight/2 + "px"
}
setupNav()

navBtn.addEventListener("click", () =>{
    if(!navMenuVisible){
        navMenuVisible = true
        navBtn.classList.add("on")
        navMenu.classList.add("on");
    }
    else{
        navMenuVisible = false;
        navBtn.classList.remove("on")
        navMenu.classList.remove("on");
    }
})

window.addEventListener("scroll", () =>{
        if(window.scrollY >= navScrollThreshold){
            navBar.classList.add("scrolled");
            navBtn.classList.add("scrolled");
        }
        else{
            navBar.classList.remove("scrolled");
            navBtn.classList.remove("scrolled");
        }
})