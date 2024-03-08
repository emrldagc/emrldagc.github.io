const reservationToggleBtns = document.querySelectorAll(".rf_toggle");
const reservationForm = document.getElementById("reservation_form");
const reservationFormBcg = document.getElementById("rf_background");
const reservationSliderContent = document.getElementById("rf_slider_content");
const reservationPagesElement = document.getElementById("rf_slides");
const reservationPages = document.querySelectorAll(".rf_slide");
const RFNavNext = document.getElementById("rf_nav_next");
const RFNavPrevious = document.getElementById("rf_nav_previous");
const RFNavSubmit = document.getElementById("rf_nav_submit");
const RFTransition = 1.25; //in seconds
let currentRFId = 0;
let RFMargin;
let RFOn = false;

//toggle reservation form
function toggleRF(){
    if(!RFOn){
        RFOn = true;
        reservationForm.classList.add("on");
        reservationFormBcg.classList.add("on");
    }
    else{
        RFOn = false;
        reservationForm.classList.remove("on");
        reservationFormBcg.classList.remove("on");
    }
}
reservationToggleBtns.forEach(element => {
    element.addEventListener("click", () =>{
        toggleRF();
    })
});

//select correct reservation form page
function selectRFPage(){
    //clamp current id value
    if(currentRFId > reservationPages.length-1)
        currentRFId = reservationPages.length-1;
    else if(currentRFId < 0)
        currentRFId = 0;
    //set and apply margin
    RFMargin = -currentRFId * reservationSliderContent.clientWidth;
    reservationPagesElement.style.marginLeft = RFMargin + "px";
    //apply transition
    setTimeout(() => {
        reservationPagesElement.style.transition = RFTransition + "s";
    }, 0);
    //set buttons to inactive when necessary
    if(currentRFId <= 0)
        RFNavPrevious.classList.add("inactive");
    else   
        RFNavPrevious.classList.remove("inactive");
    if(currentRFId >= reservationPages.length - 1)
        RFNavNext.classList.add("inactive");
    else
        RFNavNext.classList.remove("inactive");
    if(currentRFId < reservationPages.length - 1)
        RFNavSubmit.classList.add("inactive");
    else
        RFNavSubmit.classList.remove("inactive");
}
selectRFPage();

//button navigation
function nextRFPage(){
    if(currentRFId < reservationPages.length-1){
        currentRFId++;
        selectRFPage();
    }
}
function previousRFPage(){
    if(currentRFId > 0){
        currentRFId--;
        selectRFPage();
    }
}
RFNavNext.addEventListener("pointerup", () =>{nextRFPage();})
RFNavPrevious.addEventListener("pointerup", () =>{previousRFPage();})

//touch naviation
let RFTouchInteracting = false;
let startRFX;
let RFDeltaX;
let RFSlideLeft = null;
let RFTouchMargin = 0;
function startRFTouch(){
    if(!RFTouchInteracting){
        reservationPagesElement.classList.add("touch_interacting");
        reservationPagesElement.style.transition = "0s";
        let e = window.event;
        startRFX = e.pageX;
        RFTouchInteracting = true;
    }
}
function stopRFTouch(){
    if(RFTouchInteracting){
        reservationPagesElement.classList.remove("touch_interacting");
        reservationPagesElement.style.transition = RFTransition/2 + "s";
        if(RFSlideLeft != null){
            if(RFSlideLeft)
                currentRFId += Math.round(RFDeltaX/reservationPages[0].clientWidth);
            else
                currentRFId -= Math.round(RFDeltaX/reservationPages[0].clientWidth);
        }
        reservationPagesElement.style.transition = RFTransition/2 + "s";
        selectRFPage();
        RFTouchInteracting = false;
        RFSlideLeft = null;
    }
}
reservationPagesElement.addEventListener("pointerdown", () =>{startRFTouch();})
window.addEventListener("pointerup", () =>{stopRFTouch();})
window.addEventListener("pointermove", (e) =>{
    if(RFTouchInteracting){
        //calculate the distance between initian and current x position
        RFDeltaX = Math.abs(startRFX - e.pageX);
        console.log(RFDeltaX)
        //determine the sliding direction
        if(startRFX > e.pageX)
            RFSlideLeft = true;
        else if(startRFX < e.pageX)
            RFSlideLeft = false;
        //move the pages element according to the sliding direction
        if(RFSlideLeft){
            RFTouchMargin = RFMargin - RFDeltaX;
            reservationPagesElement.style.marginLeft = RFTouchMargin + "px";
        }
        else{
            RFTouchMargin = RFMargin + RFDeltaX;
            reservationPagesElement.style.marginLeft = RFTouchMargin + "px";
        }
    }
})